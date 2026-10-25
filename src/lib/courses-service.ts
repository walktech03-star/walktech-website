"use server";

import { createClientSupabase } from "@/libsupabase";

export async function getPublishedCourses() {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: courses,
      error,
    } = await supabase.from("courses").select(`
      *,
      blog_categories (*)
    `).eq("is_published", true).order("sort_order", { ascending: true });

    if (error) {
      console.error("Error fetching courses:", error);
      return [];
    }

    return courses || [];
  } catch (err) {
    console.error("Exception in getPublishedCourses:", err);
    return [];
  }
}

export async function getCourseBySlug(slug: string) {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: course,
      error,
    } = await supabase.from("courses").select(`
      *,
      blog_categories (*)
    `).eq("slug", slug).single();

    if (error) {
      console.error("Error fetching course by slug:", error);
      return null;
    }

    return course || null;
  } catch (err) {
    console.error("Exception in getCourseBySlug:", err);
    return null;
  }
}

export async function getAllCourses() {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: courses,
      error,
    } = await supabase.from("courses").select(`
      *,
      blog_categories (*)
    `).order("sort_order", { ascending: true });

    if (error) {
      console.error("Error fetching all courses:", error);
      return [];
    }

    return courses || [];
  } catch (err) {
    console.error("Exception in getAllCourses:", err);
    return [];
  }
}