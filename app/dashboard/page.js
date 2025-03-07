"use client";

import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

export default function Home() {
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [services, setServices] = useState([{ title: "", description: "" }]);
  const [contactInfo, setContactInfo] = useState("");
  const [socialMedia, setSocialMedia] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });
  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const id = '3d23b961-2fdb-4db1-945e-cd8fa30d2bf3'; // Replace with dynamic ID if needed

  // Fetch data from Supabase
  useEffect(() => {
    const fetchRow = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('businesses')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        console.log("Fetched data:", data); // Debugging: Log the fetched data

        // If data exists, populate the state
        if (data) {
          setBusinessName(data.name || ""); // Use 'name' instead of 'business_name'
          setBusinessDescription(data.description || ""); // Use 'description' instead of 'business_description'
          setServices(data.services || [{ title: "", description: "" }]);
          setContactInfo(data.contact_info || "");
          setSocialMedia(data.social_media || {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
          });
          setPhoneNumbers(Array.isArray(data.phone_numbers) ? data.phone_numbers : [""]);
          setAddress(data.address || "");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRow();
  }, [id]);

  const addService = () => {
    setServices([...services, { title: "", description: "" }]);
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "businessName") {
      setBusinessName(value);
    } else if (name === "businessDescription") {
      setBusinessDescription(value);
    } else if (name === "contactInfo") {
      setContactInfo(value);
    }
  };

  const handleSave = async () => {
    const businessData = {
      name: businessName, // Use 'name' instead of 'business_name'
      description: businessDescription, // Use 'description' instead of 'business_description'
      services,
      contact_info: contactInfo,
      social_media: socialMedia,
      phone_numbers: phoneNumbers,
      address,
    };
  
    try {
      const { data, error } = await supabase
        .from('businesses')
        .update(businessData) // Update the row
        .eq('id', id); // Match the row where id = id
  
      if (error) throw error;
  
      alert("Business data updated successfully!");
    } catch (error) {
      console.error("Error updating business data:", error);
      alert("An error occurred while updating business data.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>Business Launchpad</h1>
      <p style={{ marginBottom: "20px", color: "#666" }}>
        Welcome to Business Launchpad, your all-in-one platform for launching and managing your business. Start by
        entering your business details below, then explore our suite of tools designed to help your business succeed.
      </p>

      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>Business Information</h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>Enter the details about your business</p>

        <div style={{ display: "grid", gap: "20px" }}>
          {/* Business Name */}
          <div>
            <label htmlFor="businessName" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              Business Name
            </label>
            <input
            className="text-black"
              id="businessName"
              name="businessName"
              value={businessName}
              onChange={handleChange}
              placeholder="Enter your business name"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          {/* Business Description */}
          <div>
            <label htmlFor="businessDescription" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              Business Description
            </label>
            <textarea
            className="text-black"
              id="businessDescription"
              name="businessDescription"
              value={businessDescription}
              onChange={handleChange}
              placeholder="Describe your business"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px", minHeight: "100px" }}
            />
          </div>

          {/* Contact Info */}
          <div>
            <label htmlFor="contactInfo" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              Contact Info
            </label>
            <input
             className="text-black"
              id="contactInfo"
              name="contactInfo"
              value={contactInfo}
              onChange={handleChange}
              placeholder="Enter your contact information"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          {/* Social Media Links */}
          <div>
            <label htmlFor="facebook" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              Facebook
            </label>
            <input
            className="text-black"
              id="facebook"
              name="facebook"
              value={socialMedia.facebook}
              onChange={(e) => setSocialMedia({ ...socialMedia, facebook: e.target.value })}
              placeholder="Enter Facebook link"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          <div>
            <label htmlFor="twitter" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              Twitter
            </label>
            <input
            className="text-black"
              id="twitter"
              name="twitter"
              value={socialMedia.twitter}
              onChange={(e) => setSocialMedia({ ...socialMedia, twitter: e.target.value })}
              placeholder="Enter Twitter link"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          <div>
            <label htmlFor="instagram" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              Instagram
            </label>
            <input
            className="text-black"
              id="instagram"
              name="instagram"
              value={socialMedia.instagram}
              onChange={(e) => setSocialMedia({ ...socialMedia, instagram: e.target.value })}
              placeholder="Enter Instagram link"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          <div>
            <label htmlFor="linkedin" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              LinkedIn
            </label>
            <input
            className="text-black"
              id="linkedin"
              name="linkedin"
              value={socialMedia.linkedin}
              onChange={(e) => setSocialMedia({ ...socialMedia, linkedin: e.target.value })}
              placeholder="Enter LinkedIn link"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          {/* Phone Numbers */}
          {phoneNumbers.map((phone, index) => (
            <div key={index}>
              <label htmlFor={`phone-${index}`} style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
                Phone Number {index + 1}
              </label>
              <input
              className="text-black"
                id={`phone-${index}`}
                name="phone"
                value={phone}
                onChange={(e) => {
                  const newPhoneNumbers = [...phoneNumbers];
                  newPhoneNumbers[index] = e.target.value;
                  setPhoneNumbers(newPhoneNumbers);
                }}
                placeholder="Enter phone number"
                style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
              />
            </div>
          ))}

          <button
            onClick={() => setPhoneNumbers([...phoneNumbers, ""])}
            style={{
              width: "100%",
              padding: "8px",
              backgroundColor: "#0F172A",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
             
          >
            + Add Phone Number
          </button>

          {/* Address */}
          <div>
            <label htmlFor="address" style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
              Address
            </label>
            <textarea
            className="text-black"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your business address"
              style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px", minHeight: "100px" }}
            />
          </div>

          {/* Services */}
          {services.map((service, index) => (
            <div key={index} style={{ display: "grid", gap: "20px" }}>
              <div>
                <label htmlFor={`serviceTitle-${index}`} style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
                  Service Title
                </label>
                <input
            className="text-black"
                  id={`serviceTitle-${index}`}
                  name="serviceTitle"
                  value={service.title}
                  onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                  placeholder="Enter your service title"
                  style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
                />
              </div>

              <div>
                <label htmlFor={`serviceDescription-${index}`} style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
                  Service Description
                </label>
                <textarea
            className="text-black"
                  id={`serviceDescription-${index}`}
                  name="serviceDescription"
                  value={service.description}
                  onChange={(e) => handleServiceChange(index, "description", e.target.value)}
                  placeholder="Describe your service"
                  style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px", minHeight: "100px" }}
                />
              </div>
            </div>
          ))}

          {/* Add Service Button */}
          <button
            onClick={addService}
            style={{
              width: "100%",
              padding: "8px",
              backgroundColor: "#0F172A",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            + Add Service
          </button>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "#ffff",
            color: "#0F172A",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Save Business
        </button>
      </div>
    </div>
  );
}