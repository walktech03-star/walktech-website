import { withAuth } from "@supabase/ssr";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Create Supabase client
  const supabase = createClientSupabase(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const { data: { role } } = supabase
      .from("profiles")
      .select("role")
      .eq("id", user?.id)
      .single();

    if (role !== "admin") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // Attach user to response for use in templates
  // (handled by createClientSupabase in templates)

  return response;
}