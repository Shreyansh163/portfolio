import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shreyansh Tiwari | Full Stack Engineer",
  description:
    "Full stack engineer building high-performance web applications with clean frontend and scalable backend APIs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
