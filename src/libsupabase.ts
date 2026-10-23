"use server";

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
        return request.cookies[name];
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set(name, value);
        // @ts-ignore
        response.cookies.set(name, value, options);
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set(name, "");
        // @ts-ignore
        response.cookies.set(name, "", options);
      },
    },
  });
}