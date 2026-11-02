import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "gyanshala_admin_token";
const DEFAULT_ADMIN_SECRET = "gyanshala_admin_2026";
const DEFAULT_ADMIN_EMAIL = "admin@gyanshala.in";

export function getAdminSecret(): string {
  return (
    process.env.ADMIN_PASSWORD ||
    process.env.ADMIN_SECRET_KEY ||
    DEFAULT_ADMIN_SECRET
  );
}

export function getAdminEmail(): string {
  return process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;
}

export async function verifyAdminSession(request?: Request): Promise<boolean> {
  const secret = getAdminSecret();

  // Check Authorization / X-Admin-Key header
  if (request) {
    const headerKey =
      request.headers.get("x-admin-key") ||
      request.headers.get("authorization")?.replace("Bearer ", "");
    if (headerKey && headerKey === secret) {
      return true;
    }
  }

  // Check cookies
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (token && token === secret) {
      return true;
    }
  } catch {
    // cookies() unavailable in non-request contexts
  }

  return false;
}

export { ADMIN_COOKIE_NAME };
