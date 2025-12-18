import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Shreyansh
          </Link>

          <div className="hidden gap-6 md:flex">
            <Link
              href="/projects"
              className="text-sm text-neutral-400 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm text-neutral-400 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
