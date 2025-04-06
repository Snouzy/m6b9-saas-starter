// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export async function middleware(request: NextRequest) {
  const response = I18nMiddleware(request);
  const searchParams = request.nextUrl.searchParams.toString();
  response.headers.set("searchParams", searchParams);

  return response;
}

export const config = {
  matcher: ["/((?!api|static|_next|favicon.ico|robots.txt|service-worker\\.js).*)"],
};
