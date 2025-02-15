import { NextResponse } from "next/server";

export function middleware(req) {
  const acceptLanguage = req.headers.get("accept-language") || "";

  const defaultLocale = "en";
  const isNorwegian = acceptLanguage.startsWith("nb-NO");
  const targetLocale = isNorwegian ? "no" : defaultLocale;

  return NextResponse.redirect(new URL(`/${targetLocale}`, req.url), 301);
}

export const config = {
  matcher: "/"
};
