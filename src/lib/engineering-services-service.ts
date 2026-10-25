"use server";

import { createClientSupabase } from "@/libsupabase";

export async function getActiveEngineeringServices() {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: services,
      error,
    } = await supabase.from("engineering_services").select(`
      *,
      profiles (*)
    `).eq("is_active", true).order("sort_order", { ascending: true });

    if (error) {
      console.error("Error fetching engineering services:", error);
      return [];
    }

    return services || [];
  } catch (err) {
    console.error("Exception in getActiveEngineeringServices:", err);
    return [];
  }
}

export async function getEngineeringServiceBySlug(slug: string) {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: service,
      error,
    } = await supabase.from("engineering_services").select(`
      *,
      profiles (*)
    `).eq("slug", slug).single();

    if (error) {
      console.error("Error fetching engineering service by slug:", error);
      return null;
    }

    return service || null;
  } catch (err) {
    console.error("Exception in getEngineeringServiceBySlug:", err);
    return null;
  }
}