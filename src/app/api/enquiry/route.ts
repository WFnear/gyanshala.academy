import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { addMemoryLead } from "@/lib/leadsStore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message, botcheck } = body;

    // Honeypot check for bots
    if (botcheck) {
      return NextResponse.json({ success: true, message: "Submission ignored" });
    }

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (Name, Email, Phone)." },
        { status: 400 }
      );
    }

    // Always record lead into local store
    addMemoryLead({
      id: "lead-" + Date.now(),
      name,
      email,
      phone,
      course: course || "General Enquiry",
      message: message || "No message provided",
      status: "new",
      created_at: new Date().toISOString(),
    });

    // 1. Save Enquiry to Supabase Database (if configured)
    if (isSupabaseConfigured) {
      try {
        const supabaseAdmin = getAdminSupabase();
        if (supabaseAdmin) {
          const { error: dbError } = await supabaseAdmin.from("enquiries").insert([
            {
              name,
              email,
              phone,
              course: course || "General Enquiry",
              message: message || "No message provided",
              status: "new",
            },
          ]);
          if (dbError) {
            console.warn("Could not save enquiry to Supabase:", dbError.message);
          }
        }
      } catch (err) {
        console.warn("Supabase database insert skipped:", err);
      }
    }

    // 2. Forward to Web3Forms for Email Notification
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "08a8e640-c816-4ca0-b5b2-053a927d4107";

    if (accessKey) {
      try {
        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("course", course || "Not specified");
        formData.append("message", message || "No message provided");
        formData.append("subject", `🎓 New Enquiry: ${name} - ${course || "General"}`);
        formData.append("from_name", "Gyanshala Academy Enquiry");

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
      } catch (e) {
        console.warn("Web3Forms forward skipped:", e);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! Our team will contact you shortly.",
    });
  } catch (error: unknown) {
    console.error("Error submitting enquiry:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
