import { NextRequest, NextResponse } from "next/server";
import { salt } from "./app/api/login/route";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies?.get("token")?.value?.trim();
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    try {
      await jwtVerify(token, salt);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
export const config = {
  matcher: ["/admin/:path*"],
};
