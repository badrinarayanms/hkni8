"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";

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
    <div className="flex w-full flex-col  items-center min-h-screen p-4 bg-[#020617]">
      
      <div
        style={{ borderRadius: 10 }}
        className="flex w-full rounded-xl bg-[#020617]  flex-col items-center justify-center min-h-screen px-4  "
      >
        <div className="w-full p-6 bg-[#020617] border border-white rounded-xl mt-10 shadow-lg">
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            Talent Search
          </h1>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="companyType"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <Input
                id="companyType"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role"
                className="w-full mt-1 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <Input
                id="location"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Location text-black"
                style={{color:'black'}}
                className="w-full mt-1"
              />
            </div>
            <Button
              onClick={searchProfiles}
              disabled={loading}
              className="w-full bg-black rounded-lg text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              {loading ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results && results.length > 0 && (
        <div className="mt-6 gap-6 flex flex-wrap justify-center items-center">
          {results
            .filter(profile => profile.rich_snippet?.top?.extensions?.[1])
            .map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
        </div>
      )}
    </div>
  );
}

function ProfileCard({ profile }) {
  return (
    <a
    href={profile.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 hover:underline flex items-start p-4"
  >
    <div className="bg-white shadow-lg  p-4 border flex  rounded-xl flex-col items-center text-center">
      <div class="flex mr-4 justify-between items-center p-3 w-72 h-28 bg-white ">
  <section class="flex mr-4 justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
      
        <FaLinkedin size={50} color="black" />  
       
  </section>
  
  <section class="block border-l  border-gray-300 m-3 p-10">
    <div class="pl-3 flex flex-col justify-start items-start p-5">
      <h3 class="text-black font-semibold text-sm">{profile.rich_snippet?.top?.extensions?.[1]}</h3>
      <h3 class="bg-clip-text  text-black text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-sm font-bold">{profile.rich_snippet?.top?.extensions?.[0]}</h3>
    </div>
    
  </section>
</div>
      
      
    
    </div>
    </a>
  );
}
