import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/common/ProjectCard";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="py-24">
        <Container>
          <h1 className="text-2xl font-semibold">Projects</h1>

          <p className="mt-2 text-neutral-400 max-w-xl">
            A selection of projects showcasing my approach to frontend
            performance, clean UI, and scalable backend APIs.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
