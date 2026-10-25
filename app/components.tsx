import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductsList } from "@/components/products/list";

export default function ComponentsShopPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ProductsList />
        </div>
      </section>

      <Footer />
    </main>
  );
}