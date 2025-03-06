'use client'
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getJson } from "serpapi";

const genaiClient = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");
const serpApiKey = "YOUR_SERPAPI_KEY";

interface Profile {
  name: string;
  contact: string;
}

interface SerpApiResponse {
  organic_results: any[];
}

async function extractContactDetails(data: any[]): Promise<Profile[]> {
  const model = genaiClient.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `Analyze the following LinkedIn profile data and extract a JSON list of names and contact details:
  ${JSON.stringify(data, null, 2)}

  Return the data in the following format:
  [
    { "name": "John Doe", "contact": "john.doe@example.com" },
    { "name": "Jane Smith", "contact": "jane.smith@example.com" }
  ]`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return JSON.parse(response.text());
}

export default function LinkedInSearch() {
  const [place, setPlace] = useState("");
  const [role, setRole] = useState("");
  const [results, setResults] = useState<{ name: string; contact: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const searchProfiles = async () => {
    setLoading(true);
    try {
      getJson(
        {
          engine: "google",
          q: `site:linkedin.com/in ${role} in ${place}`,
          api_key: serpApiKey,
          num: 10,
        },
        async (json) => {
          const profiles = json.organic_results;
          try {
            const contactDetails = await extractContactDetails(profiles);
            setResults(contactDetails);
          } catch (error) {
            console.error("Error extracting contact details:", error);
          }
          setLoading(false);
        }
      );
    } catch (error) {
      console.error("Error fetching LinkedIn profile data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">LinkedIn Profile Search</h1>
      <input
        type="text"
        placeholder="Enter location"
        className="w-full p-2 border rounded"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter role"
        className="w-full p-2 border rounded"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        onClick={searchProfiles}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
      {results.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Results:</h2>
          <ul className="list-disc pl-4">
            {results.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>: {item.contact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
