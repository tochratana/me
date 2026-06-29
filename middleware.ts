import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "km"] as const;
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;

    // Prefer the saved manual choice, then fall back to the browser language.
    const acceptLanguage = request.headers.get("accept-language") || "";
    let preferredLocale = defaultLocale;

    if (savedLocale === "en" || savedLocale === "km") {
      preferredLocale = savedLocale;
    } else if (acceptLanguage.includes("km")) {
      preferredLocale = "km";
    }

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
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
