import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { ProjectsList } from "@/src/components/projects/projects-list";

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ProjectsList />
        </div>
      </section>

      <Footer />
    </main>
  );
}