"use client";

import { useMemo } from "react";
import { useCart } from "./cart/CartContext";

const WHATSAPP_NUMBER = "5218110701423"; // <-- cambia a tu número real

export function CartSummary() {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const hasQuoteItems = items.some((item) => item.price === 0);

  const whatsappUrl = useMemo(() => {
    if (!items.length) return null;

    const lines: string[] = [];

    lines.push("✨ Pedido desde Once Upon a Deck ✨");
    lines.push("");
    lines.push("Cartas seleccionadas:");

    for (const item of items) {
      const isQuote = item.price === 0;
      const priceLabel = isQuote ? "Cotizar" : `$${item.price} MXN`;
      lines.push(
        `• ${item.name} (${item.game} · ${item.rarity}) x${item.quantity} - ${priceLabel}`
      );
    }

    lines.push("");
    if (totalPrice > 0) {
      lines.push(
        `Subtotal estimado (solo cartas con precio definido): $${totalPrice} MXN`
      );
    }
    if (hasQuoteItems) {
      lines.push(
        "🔎 Algunas cartas son solo para cotizar, por favor confirma precio y disponibilidad."
      );
    }
    lines.push("");
    lines.push("Mi nombre es: ____________________");
    lines.push("Ciudad / Estado: ____________________");

    const message = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  }, [items, totalPrice, hasQuoteItems]);

  if (!items.length) {
    return (
      <div
        id="cart-section" // 👈 para que el botón 'Ir al carrito' también funcione cuando está vacío
        className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-xs text-gray-300"
      >
        <p className="mb-1 font-semibold text-[#F4D58D]">
          Tu carrito está vacío.
        </p>
        <p>Agrega cartas para comenzar tu pedido ✨</p>
      </div>
    );
  }

  return (
    <aside
      id="cart-section" // 👈 clave para el scroll desde el botón flotante
      className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-xs text-gray-100"
    >
      <h2 className="mb-2 text-sm font-semibold text-[#F4D58D]">Tu pedido</h2>

      <ul className="mb-3 max-h-64 space-y-2 overflow-y-auto pr-1">
        {items.map((item) => {
          const isQuote = item.price === 0;
          const priceLabel = isQuote ? "Cotizar" : `$${item.price} MXN`;

          return (
            <li key={item.id} className="flex justify-between gap-2">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-[11px] text-gray-400">
                  {item.game} · {item.rarity} · x{item.quantity}
                </p>
              </div>
              <p className="text-[11px] font-semibold text-[#F4D58D]">
                {priceLabel}
              </p>
            </li>
          );
        })}
      </ul>

      {totalPrice > 0 && (
        <p className="mb-2 text-[11px] text-gray-300">
          Subtotal (solo cartas con precio definido):{" "}
          <span className="font-semibold text-[#F4D58D]">
            ${totalPrice} MXN
          </span>
        </p>
      )}

      {hasQuoteItems && (
        <p className="mb-3 text-[11px] text-gray-400">
          🔎 Las cartas marcadas como{" "}
          <span className="font-semibold">“Cotizar”</span> no tienen precio
          fijo. Lo acordarán directamente por WhatsApp.
        </p>
      )}

      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 block w-full rounded-lg bg-[#25D366] py-2 text-center text-xs font-semibold text-[#050816] transition hover:bg-[#1EB555]"
        >
          Enviar pedido por WhatsApp
        </a>
      )}

      <button
        onClick={clearCart}
        className="w-full rounded-lg border border-white/20 py-2 text-[11px] text-gray-300 transition hover:border-red-400 hover:text-red-300"
      >
        Vaciar carrito
      </button>
    </aside>
  );
}
