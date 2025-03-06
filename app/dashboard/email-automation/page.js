const { GoogleGenerativeAI } = require("@google/generative-ai");
const Mailjet = require("node-mailjet");
const csv = require("csv-parser");
const fs = require("fs");
const readline = require("readline");

// Initialize Google Gemini and Mailjet clients
const genaiClient = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Replace with your Gemini API key
const mailjet = Mailjet.apiConnect("6dbb90b4bc6d1665e56f503a2a14b962",
  "def165b65508f5cc7bf2159c63c6aaca"); // Replace with your Mailjet keys

// Function to get user input for the prompt template
function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Function to generate personalized email content using Google Gemini
async function generatePersonalizedEmail(recipient, promptTemplate) {
  const model = genaiClient.getGenerativeModel({ model: "gemini-1.5-pro" });

  // Replace placeholders in the prompt template with recipient data
  const prompt = `Write a personalized email for ${recipient.name}  in context with ${promptTemplate }

Email Content:
- Subject: Personalized subject line
- Body: Personalized email body with a call-to-action`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

// Function to send email using Mailjet
async function sendEmail(recipient, emailContent) {
  const subject = emailContent.split("\n")[0].replace("Subject: ", "");
  const body = emailContent.split("\n").slice(1).join("\n");

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "ssvidip@gmail.com",
          Name: "S.S.Vidip Kumar",
        },
        To: [
          {
            Email: recipient.email,
            Name: recipient.name,
          },
        ],
        Subject: subject,
        TextPart: body,
      },
    ],
  });

  try {
    const response = await request;
    console.log(`Email sent to ${recipient.name} (${recipient.email})`);
    console.log("Mailjet Response:", response.body);
  } catch (error) {
    console.error(`Error sending email to ${recipient.name}:`, error);
  }
}

// Main function to handle the workflow
async function main() {
  const recipients = [];

  // Get user input for the prompt template
  const promptTemplate = await getUserInput(
    "Enter your email prompt template (use {name}, {location}, and {pastInteraction} as placeholders):\n"
  );

  console.log("Using prompt template:", promptTemplate);

  // Read and parse the CSV file
  fs.createReadStream("recipients.csv")
    .pipe(csv())
    .on("data", (row) => {
      recipients.push({
        name: row.name,
        email: row.email,
        location: row.location,
        pastInteraction: row.pastInteraction,
      });
    })
    .on("end", async () => {
      console.log("Recipient data loaded from CSV file.");

      // Process each recipient
      for (const recipient of recipients) {
        try {
          // Generate personalized email content
          const emailContent = await generatePersonalizedEmail(recipient, promptTemplate);
          console.log(`Generated Email for ${recipient.name}:\n`, emailContent);

          // Send the email
          await sendEmail(recipient, emailContent);
        } catch (error) {
          console.error(`Error processing ${recipient.name}:`, error);
        }
      }
    });
}

// Run the main function
main();