import { createClientSupabase } from "@/libsupabase";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export async function middleware(request: NextRequest) {
  // Create Supabase client
  const supabase = createClientSupabase(request);

  // Refresh session/cookies
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  // Handle authentication errors gracefully
  if (authError) {
    console.error("Supabase auth error in middleware:", authError);
  }

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // If no user is authenticated, redirect to login
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    // If user is authenticated, check their role
    const {
      data: profileData,
      error: profileError,
    } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    // Explicitly create profile object with proper null handling
    const profile = profileData?.role
      ? { role: profileData.role }
      : null;

    // If profile query fails or user doesn't have admin role, redirect
    if (profileError || !profile || profile?.role !== "admin") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // Attach user information to response for use in templates
  // The createClientSupabase hook handles user state in client components

  return NextResponse.next();
}