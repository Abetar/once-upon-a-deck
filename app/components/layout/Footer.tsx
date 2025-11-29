// components/layout/Footer.tsx
import Link from "next/link";
import { Container } from "../../components/common/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050816] py-6 text-xs text-gray-400">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© {year} Once Upon a Deck. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/onceupon_adeck/"
            target="_blank"
            className="hover:text-[#F4D58D]"
          >
            Instagram
          </Link>
          <Link
            href="https://wa.me/5210000000000"
            target="_blank"
            className="hover:text-[#F4D58D]"
          >
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}
