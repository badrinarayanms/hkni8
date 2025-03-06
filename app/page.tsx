"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

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

  const addService = () => {
    setServices([...services, { title: "", description: "" }]);
  };

  interface Service {
    title: string;
    description: string;
  }

  interface SocialMedia {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  }

  const handleServiceChange = (index: number, field: keyof Service, value: string) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
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
    businessName,
    businessDescription,
    services,
    contactInfo,
    socialMedia,
    phoneNumbers,
    address,
  };

  try {
    const response = await fetch("/api/saveBusiness", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(businessData),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Success!",
        description: "Business data saved successfully.",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to save business data.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Error saving business data:", error);
    toast({
      title: "Error",
      description: "An error occurred while saving business data.",
      variant: "destructive",
    });
  }
};


      

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-black">Business Launchpad</h1>
      <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
        Welcome to Business Launchpad, your all-in-one platform for launching and managing your business. Start by
        entering your business details below, then explore our suite of tools designed to help your business succeed.
      </p>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
          <CardDescription>Enter the details about your business</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Business Name */}
            <div className="sm:col-span-2">
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <Input
                id="businessName"
                name="businessName"
                value={businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            {/* Business Description */}
            <div className="sm:col-span-2">
              <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Business Description
              </label>
              <Textarea
                id="businessDescription"
                name="businessDescription"
                value={businessDescription}
                onChange={handleChange}
                placeholder="Describe your business"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-2">
              <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Info
              </label>
              <Input
                id="contactInfo"
                name="contactInfo"
                value={contactInfo}
                onChange={handleChange}
                placeholder="Enter your contact information"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            {/* Social Media Links */}
            <div className="sm:col-span-2">
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                Facebook
              </label>
              <Input
                id="facebook"
                name="facebook"
                value={socialMedia.facebook}
                onChange={(e) => setSocialMedia({ ...socialMedia, facebook: e.target.value })}
                placeholder="Enter Facebook link"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                Twitter
              </label>
              <Input
                id="twitter"
                name="twitter"
                value={socialMedia.twitter}
                onChange={(e) => setSocialMedia({ ...socialMedia, twitter: e.target.value })}
                placeholder="Enter Twitter link"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                Instagram
              </label>
              <Input
                id="instagram"
                name="instagram"
                value={socialMedia.instagram}
                onChange={(e) => setSocialMedia({ ...socialMedia, instagram: e.target.value })}
                placeholder="Enter Instagram link"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn
              </label>
              <Input
                id="linkedin"
                name="linkedin"
                value={socialMedia.linkedin}
                onChange={(e) => setSocialMedia({ ...socialMedia, linkedin: e.target.value })}
                placeholder="Enter LinkedIn link"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            {/* Phone Numbers */}
            {phoneNumbers.map((phone, index) => (
              <div key={index} className="sm:col-span-2">
                <label htmlFor={`phone-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number {index + 1}
                </label>
                <Input
                  id={`phone-${index}`}
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    const newPhoneNumbers = [...phoneNumbers];
                    newPhoneNumbers[index] = e.target.value;
                    setPhoneNumbers(newPhoneNumbers);
                  }}
                  placeholder="Enter phone number"
                  className="border-gray-300 focus:border-black w-full"
                />
              </div>
            ))}

            <Button
              onClick={() => setPhoneNumbers([...phoneNumbers, ""])}
              className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-2"
            >
              + Add Phone Number
            </Button>

            {/* Address */}
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your business address"
                className="border-gray-300 focus:border-black w-full"
              />
            </div>

            {/* Services */}
            {services.map((service, index) => (
              <div key={index} className="sm:col-span-2 space-y-4">
                <div className="sm:col-span-1">
                  <label htmlFor={`serviceTitle-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Service Title
                  </label>
                  <Input
                    id={`serviceTitle-${index}`}
                    name="serviceTitle"
                    value={service.title}
                    onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                    placeholder="Enter your service title"
                    className="border-gray-300 focus:border-black w-full"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor={`serviceDescription-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Description
                  </label>
                  <Textarea
                    id={`serviceDescription-${index}`}
                    name="serviceDescription"
                    value={service.description}
                    onChange={(e) => handleServiceChange(index, "description", e.target.value)}
                    placeholder="Describe your service"
                    className="border-gray-300 focus:border-black w-full h-full min-h-[80px]"
                  />
                </div>
              </div>
            ))}

            {/* Add Service Button */}
            <div className="sm:col-span-2">
              <Button
                onClick={addService}
                className="bg-green-500 hover:bg-green-600 text-white w-full"
              >
                + Add Service
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave} className="bg-black hover:bg-gray-800 text-white">
            Save Business
          </Button>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}