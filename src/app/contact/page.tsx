import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/common/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="py-24">
        <Container>
          <h1 className="text-3xl font-bold">Contact</h1>

          <p className="mt-4 text-neutral-400 max-w-xl">
            If you’d like to discuss opportunities or collaborations, feel free
            to reach out.
          </p>

          <ContactForm />
        </Container>
      </main>
    </>
  );
}
