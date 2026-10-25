import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectsList } from "@/components/projects/projects-list";

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