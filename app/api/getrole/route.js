import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genaiClient = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const place = searchParams.get("place");
    const role = searchParams.get("role");

    if (!place || !role) {
      return NextResponse.json({ error: "Missing place or role" }, { status: 400 });
    }

    const serpApiUrl = `https://serpapi.com/search?engine=google&q=site:linkedin.com/in ${role} in ${place}&api_key=${process.env.SERPAPI_KEY}&num=10`;

    const response = await fetch(serpApiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch from SERP API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
