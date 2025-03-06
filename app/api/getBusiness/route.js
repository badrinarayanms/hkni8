// app/api/getBusiness/route.js
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const businessName = searchParams.get("businessName");

  try {
    const { data, error } = await supabase
      .from("businesses")
      .select("*")
      .eq("name", businessName)
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching business data:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}