import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  const isAdminPage = request.nextUrl.pathname.startsWith("/admin/dashboard");

  // Belum login dan bukan halaman login
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Sudah login dan coba akses login/register, arahkan ke dashboard (atau /admin kalau admin)
  if (token && isAuthPage) {
    const redirectUrl = token.role === "admin" ? "/admin/dashboard" : "/order";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  // Cegah user biasa masuk ke /admin
  if (token && isAdminPage && token.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url)); // atau ke "/order"
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/order/:path*", "/login", "/register"],
};
