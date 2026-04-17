import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "km"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    // Get the preferred language from accept-language header
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferredLocale = acceptLanguage.includes("km")
      ? "km"
      : defaultLocale;

    // Redirect to the preferred locale
    return NextResponse.redirect(
      new URL(
        `/${preferredLocale}${pathname === "/" ? "" : pathname}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
