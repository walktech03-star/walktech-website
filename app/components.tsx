import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { ProductsList } from "@/src/components/products/list";

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