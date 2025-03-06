"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TalentSearch() {
  const [place, setPlace] = useState("");
  const [role, setRole] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchProfiles = async () => {
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const res = await fetch(`/api/getrole?place=${place}&role=${role}`);
      const data = await res.json();

      if (res.ok) {
        setResults(data.organic_results || []); // Extracting main results
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Error fetching profiles:", err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Talent Search</h1>

      <div className="w-full max-w-lg space-y-3">
        <Input placeholder="Enter place" value={place} onChange={(e) => setPlace(e.target.value)} />
        <Input placeholder="Enter role" value={role} onChange={(e) => setRole(e.target.value)} />

        <Button onClick={searchProfiles} disabled={loading} className="w-full">
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results && results.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {results.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProfileCard({ profile }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border flex flex-col items-center text-center">
      <img
        src={profile.favicon || "https://via.placeholder.com/50"}
        alt="Profile Icon"
        className="w-12 h-12 rounded-full"
      />
      <h2 className="text-lg font-semibold mt-2">{profile.title}</h2>
      <p className="text-gray-500">{profile.rich_snippet?.top?.extensions?.[1]}</p>
      <p className="text-gray-600">{profile.rich_snippet?.top?.extensions?.[0]}</p>
      <a
        href={profile.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-600 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
}
