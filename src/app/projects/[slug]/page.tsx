import { projects } from "@/lib/projects";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Shreyansh Tiwari`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="py-32">
        <Container>
          <h1 className="text-3xl font-semibold">{project.title}</h1>

          <p className="mt-4 max-w-2xl text-neutral-400">
            {project.description}
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="mt-2 text-neutral-400">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Solution</h2>
              <p className="mt-2 text-neutral-400">{project.solution}</p>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}