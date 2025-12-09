// components/layout/WhatsAppFloatingButton.tsx
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const WHATSAPP_NUMBER = "528110701423"; // cámbialo por tu número real

export function WhatsAppFloatingButton() {
  const message = encodeURIComponent(
    "Hola, vengo de la página Once Upon a Deck y quiero hacer un pedido ✨"
  );

  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 animate-mystic-float"
      aria-label="Escribir por WhatsApp"
    >
      <PhoneCall className="h-6 w-6" />
    </Link>
  );
}
