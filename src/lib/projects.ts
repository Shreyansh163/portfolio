export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "crud-management-app",
    title: "CRUD Management App",
    description:
      "A full CRUD application with clean architecture and reusable components.",
    tech: ["React", "TypeScript", "REST APIs"],
    problem:
      "Managing structured data with repetitive UI logic leads to bugs and poor maintainability.",
    solution:
      "Designed reusable form components, separated API logic, and implemented predictable state handling.",
  },
  {
    slug: "frontend-performance-dashboard",
    title: "Frontend Performance Dashboard",
    description:
      "A performance-focused UI optimized for speed, accessibility, and maintainability.",
    tech: ["Next.js", "Tailwind", "Lighthouse"],
    problem:
      "Poor frontend performance negatively impacts user experience and SEO.",
    solution:
      "Optimized rendering strategy, reduced unnecessary JS, and improved Lighthouse metrics.",
  },
];
