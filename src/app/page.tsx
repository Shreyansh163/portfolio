import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/common/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="py-32">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                I build high-performance web applications
                <br />
                <span className="text-neutral-400">
                  with clean frontend and scalable backend APIs.
                </span>
              </h1>

              <div className="mt-8 flex gap-4">
                <Link href="/projects">
                  <Button>View Projects</Button>
                </Link>

                <Link href="/contact">
                  <Button variant="secondary">Contact Me</Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* PROJECTS SECTION */}
        <section className="pb-32">
          <Container>
            <h2 className="text-2xl font-semibold">Selected Projects</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map(project => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
