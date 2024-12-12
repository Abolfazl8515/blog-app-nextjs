import { NextResponse } from "next/server";
import middleWareAuth from "./utils/middleWareAuth";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    const user = await middleWareAuth(req);
    if (user) return NextResponse.redirect(new URL(`/`, req.url));
  }

  if (pathname.startsWith("/profile")) {
    const user = await middleWareAuth(req);
    if (!user) return NextResponse.redirect(new URL(`/signin`, req.url));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
