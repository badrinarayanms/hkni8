import { NextResponse } from "next/server";
import { getJson } from "serpapi";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI client
const genaiClient = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to fetch a valid location from SerpApi
async function getValidLocation(location) {
  try {
    console.log("Fetching valid locations from SerpApi...");

    const response = await fetch(
      `https://serpapi.com/locations.json?api_key=${process.env.SERPAPI_KEY}`
    );
    const locations = await response.json();

    // Find the closest match
    const matchedLocation = locations.find((loc) =>
      loc.name.toLowerCase().includes(location.toLowerCase())
    );

    return matchedLocation ? matchedLocation.name : "New York, United States"; // Default fallback
  } catch (error) {
    console.error("Error fetching valid locations:", error);
    return "New York, United States";
  }
}

// Function to generate insights and format them as Tailwind-styled HTML
async function generateInsights(data) {
  const model = genaiClient.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `Analyze the following competitor data and provide steps to defeat them and what to learn from them.
  Format the response as HTML inside a Tailwind-styled div container for UI display.
  
  The container should:
  -modern ui 
  - show competitors
  - Use a clean card layout with padding, rounded corners, and a light shadow.
  - Include sections with headings (h2) for clarity.
  - Use bulleted lists for readability.
  - Highlight key points with bold text.
  -dont mentio it uses html css and other stuffs
  -give text in black and white bg
  or white text black bg

  Data:
  ${JSON.stringify(data, null, 2)}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

// Main API handler
export async function POST(request) {
  try {
    console.log("Request received");

    // Parse request body
    let { companyType, location } = await request.json();
    console.log("Request data:", { companyType, location });

    if (!companyType || !location) {
      console.error("Missing companyType or location");
      return NextResponse.json(
        { error: "companyType and location are required" },
        { status: 400 }
      );
    }

    // Validate and correct the location
    location = await getValidLocation(location);
    console.log("Validated Location:", location);

    // Fetch competitor data from SerpApi
    console.log("Fetching data from SerpApi...");
    const serpApiData = await new Promise((resolve, reject) => {
      getJson(
        {
          engine: "google",
          q: companyType,
          location: location,
          hl: "en",
          gl: "us",
          num: 10,
          api_key: process.env.SERPAPI_KEY,
        },
        (json) => {
          console.log("SerpApi response received");
          resolve(json);
        }
      ).catch((error) => {
        console.error("SerpApi error:", error);
        reject(error);
      });
    });

    console.log("Raw SerpApi Data:", serpApiData);

    // Generate insights formatted in Tailwind HTML
    console.log("Generating insights with Gemini AI...");
    const insights = await generateInsights(serpApiData);
    console.log("Insights generated");

    return NextResponse.json({ insights });
  } catch (error) {
    console.error("Error in /api/getInsights:", error);
    return NextResponse.json(
      { error: "Failed to generate insights" },
      { status: 500 }
    );
  }
}
