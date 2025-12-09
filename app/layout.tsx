// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFloatingButton } from "./components/layout/WhatsAppFloatingButton";
import { RootProviders } from "./components/layout/RootProviders";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Once Upon a Deck – Venta de cartas TCG en Monterrey",
  description:
    "Venta de cartas Pokémon, Yu-Gi-Oh! y Magic: The Gathering en Monterrey. Compra tus cartas y arma tu pedido por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cinzel.variable}>
      <body
        className={`${cinzel.className} min-h-screen bg-[#050816] text-gray-100`}
      >
        <RootProviders>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <ScrollToTopButton />
        </RootProviders>
      </body>
    </html>
  );
}
