"use server";

import { createClientSupabase } from "@/libsupabase";

export async function getActiveProjectIdeas() {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: ideas,
      error,
    } = await supabase.from("project_ideas").select(`
      *,
      profiles (*)
    `).eq("status", "active").order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching project ideas:", error);
      return [];
    }

    return ideas || [];
  } catch (err) {
    console.error("Exception in getActiveProjectIdeas:", err);
    return [];
  }
}

export async function getProjectIdeaById(id: string) {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: idea,
      error,
    } = await supabase.from("project_ideas").select(`
      *,
      profiles (*)
    `).eq("id", id).single();

    if (error) {
      console.error("Error fetching project idea by ID:", error);
      return null;
    }

    return idea || null;
  } catch (err) {
    console.error("Exception in getProjectIdeaById:", err);
    return null;
  }
}

export async function getProjectIdeasByCategory(category: string) {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: ideas,
      error,
    } = await supabase.from("project_ideas").select(`
      *,
      profiles (*)
    `).eq("category", category).eq("status", "active");

    if (error) {
      console.error("Error fetching project ideas by category:", error);
      return [];
    }

    return ideas || [];
  } catch (err) {
    console.error("Exception in getProjectIdeasByCategory:", err);
    return [];
  }
}