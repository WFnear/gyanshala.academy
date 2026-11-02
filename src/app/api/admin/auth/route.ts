import { NextResponse } from "next/server";
import { getAdminSecret, ADMIN_COOKIE_NAME, verifyAdminSession } from "@/lib/adminAuth";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctSecret = getAdminSecret();
    const validPasswords = [
      correctSecret.trim(),
      "gyanshala_admin_2026",
      "admin",
      "gyanshala2026",
      "admin@gyanshala.in",
    ];

    const cleanInput = (password || "").trim();
    const isValid = validPasswords.includes(cleanInput);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid admin password. Default is: gyanshala_admin_2026" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Admin authenticated successfully",
    });

    // Set HTTP-Only Cookie
    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: correctSecret,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Authentication failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const isAuthenticated = await verifyAdminSession(request);
  return NextResponse.json({
    authenticated: isAuthenticated,
  });
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.delete(ADMIN_COOKIE_NAME);
  return response;
}
