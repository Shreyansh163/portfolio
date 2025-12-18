import Link from "next/link";
import { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-neutral-700">
        <h3 className="text-lg font-semibold group-hover:underline">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-neutral-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="rounded-md bg-indigo-500/10 px-2 py-1 text-xs text-indigo-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
