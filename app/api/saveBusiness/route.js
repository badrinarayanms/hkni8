// app/api/saveBusiness/route.js
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { businessName, businessDescription, services, contact_info } = await request.json();

  try {
    const { data, error } = await supabase
      .from("businesses")
      .insert([{ name: businessName, description: businessDescription, services, contact_info }])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error saving business data:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}