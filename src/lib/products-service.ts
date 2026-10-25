import { createClientSupabase } from "@/libsupabase";

export async function getPublishedProducts() {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: products,
      error,
    } = await supabase.from("products").select(`
      *,
      product_categories (*)
    `).eq("is_published", true).order("sort_order", { ascending: true });

    if (error) {
      console.error("Error fetching products:", error);
      return [];
    }

    return products || [];
  } catch (err) {
    console.error("Exception in getPublishedProducts:", err);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: product,
      error,
    } = await supabase.from("products").select(`
      *,
      product_categories (*)
    `).eq("slug", slug).single();

    if (error) {
      console.error("Error fetching product by slug:", error);
      return null;
    }

    return product || null;
  } catch (err) {
    console.error("Exception in getProductBySlug:", err);
    return null;
  }
}

export async function getProductCategories() {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: categories,
      error,
    } = await supabase.from("product_categories").select("*").eq("is_active", true).order("sort_order", { ascending: true });

    if (error) {
      console.error("Error fetching product categories:", error);
      return [];
    }

    return categories || [];
  } catch (err) {
    console.error("Exception in getProductCategories:", err);
    return [];
  }
}

export async function getProductByCategory(categoryId: string) {
  try {
    const supabase = createClientSupabase(null as never);

    const {
      data: products,
      error,
    } = await supabase.from("products").select(`
      *,
      product_categories (*)
    `).eq("category_id", categoryId).eq("is_published", true);

    if (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }

    return products || [];
  } catch (err) {
    console.error("Exception in getProductByCategory:", err);
    return [];
  }
}