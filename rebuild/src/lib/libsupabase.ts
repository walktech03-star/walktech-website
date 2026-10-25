import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest } from "next/server";

export function createClientSupabase(request: NextRequest) {
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseKey || !supabaseUrl) {
    throw new Error(
      "Missing Supabase environment variables. Please check your .env file."
    );
  }
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        // Cookie setting handled by createServerClient hook
      },
      remove(name: string, options: CookieOptions) {
        // Cookie removal handled by createServerClient hook
      },
    },
  });
}