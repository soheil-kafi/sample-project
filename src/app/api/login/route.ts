import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export const salt = new TextEncoder().encode("probablyThereIsNoHero");
export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (username == "admin" && password == "1234") {
    const token = await new SignJWT({
      role: "admin",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(salt);
    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      path: "/",
    });
    return res;
  }
  return NextResponse.json({ error: "invalid credentials" }, { status: 401 });
}
