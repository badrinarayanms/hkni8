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
    <div  style={{borderRadius:10,marginTop:50}} className="flex mt-32 w-full rounded-xl bg-[#020617]  flex-col items-center justify-center  px-4  ">
      <div className="w-full  p-6 mt-32   shadow-lg bg-[#020617]  border border-white rounded-xl">
        <h1 className="text-2xl font-bold text-center text-white mb-4">Competitor Insights</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="companyType" className="block text-sm font-medium text-white mb-5">
              Type of Company
            </label>
            <Input
              id="companyType"

              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              placeholder="e.g., E-commerce"
              className="w-full mt-1 text-black"
              style={{borderRadius:5}}
            />
          </div>
          <div>
            <label htmlFor="location" className="text-white mb-5 block text-sm font-medium  ">
              Location
            </label>
            <Input
              id="location"
              value={location}

              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., New York, United States"
              className="w-full mt-1 text-black " style={{borderRadius:5}}
            />
          </div>
          <Button onClick={handleSubmit} disabled={loading} className="w-full bg-[#0F172A] rounded-xl text-white py-2 px-4   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            {loading ? <Loader2 className="animate-spin mr-2" /> : "Get Insights"}
          </Button>
        </div>
        {insights && (
          <div className="mt-10 p-4 border border-gray-200 rounded-xl shadow-sm transition-opacity duration-300 bg-black">
            <h2 className="text-lg font-semibold   text-center mb-4">
              Insights
            </h2>
            <div 
              className="mt-2 rounded-lg p-4" 
              dangerouslySetInnerHTML={{ __html: insights }} 
            />
          </div>
        )}
      </div>
    </div>
  );
}
