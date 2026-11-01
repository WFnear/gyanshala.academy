import { NextResponse } from "next/server";

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

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "08a8e640-c816-4ca0-b5b2-053a927d4107";

    if (!accessKey) {
      console.warn("WEB3FORMS_ACCESS_KEY is not defined in environment variables.");
      return NextResponse.json(
        {
          success: false,
          message:
            "Form service configuration missing. Please add WEB3FORMS_ACCESS_KEY to .env.local",
        },
        { status: 500 }
      );
    }

    // Forward to Web3Forms API
    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("course", course || "Not specified");
    formData.append("message", message || "No message provided");
    formData.append("subject", `🎓 New Enquiry: ${name} - ${course || "General"}`);
    formData.append("from_name", "Gyanshala Academy Enquiry");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return NextResponse.json(
        {
          success: false,
          message: data.message || "Failed to submit enquiry to Web3Forms.",
        },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully!",
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
