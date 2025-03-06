// app/api/saveBusiness/route.js
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    businessName,
    businessDescription,
    services,
    contactInfo,
    socialMedia,
    phoneNumbers,
    address,
  } = await request.json();

  try {
    const { data, error } = await supabase
      .from("businesses")
      .insert([
        {
          name: businessName,
          description: businessDescription,
          services,
          contact_info: contactInfo,
          social_media: socialMedia,
          phone_numbers: phoneNumbers,
          address,
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error saving business data:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}