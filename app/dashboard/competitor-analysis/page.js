"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [companyType, setCompanyType] = useState("");
  const [location, setLocation] = useState("");
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!companyType || !location) {
      alert("Please enter both company type and location.");
      return;
    }
    setLoading(true);
    setInsights("");
    try {
      const response = await fetch("/api/getInsights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyType, location }),
      });
      const data = await response.json();
      setInsights(data.insights);
    } catch (error) {
      console.error("Error fetching insights:", error);
      setInsights("Failed to fetch insights. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full  p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">Competitor Insights</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="companyType" className="block text-sm font-medium text-gray-700">
              Type of Company
            </label>
            <Input
              id="companyType"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              placeholder="e.g., E-commerce"
              className="w-full mt-1"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., New York, United States"
              className="w-full mt-1"
            />
          </div>
          <Button onClick={handleSubmit} disabled={loading} className="w-full flex items-center justify-center">
            {loading ? <Loader2 className="animate-spin mr-2" /> : "Get Insights"}
          </Button>
        </div>
        {insights && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition-opacity duration-300">
            <h2 className="text-lg font-semibold text-gray-900">Insights:</h2>
            <div className="mt-2 text-gray-700 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: insights }} />
          </div>
        )}
      </div>
    </div>
  );
}
