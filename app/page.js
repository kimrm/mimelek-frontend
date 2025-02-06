import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language") || "";

  const defaultLocale = "en";

  const isNorwegian = acceptLanguage.startsWith("nb-NO");

  const targetLocale = isNorwegian ? "no" : defaultLocale;

  redirect(`/${targetLocale}`);
}
