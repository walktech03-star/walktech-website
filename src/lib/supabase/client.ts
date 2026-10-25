import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient, User, Session, AuthError } from "@supabase/supabase-js";

export type { SupabaseClient, User, Session, AuthError };

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);