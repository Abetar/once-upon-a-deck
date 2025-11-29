"use client";

import { useState } from "react";
import { useCart } from "./cart/CartContext";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5210000000000"; // cámbialo luego en .env

type OrderFormState = {
  name: string;
  phone: string;
  city: string;
  address: string;
  shippingMethod: string;
  notes: string;
};

const initialForm: OrderFormState = {
  name: "",
  phone: "",
  city: "",
  address: "",
  shippingMethod: "",
  notes: "",
};

export function CartSummary() {
  const { items, totalItems, totalPrice, removeItem, clearCart } = useCart();
  const [form, setForm] = useState<OrderFormState>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    if (!items.length) {
      setError(
        "Tu carrito está vacío. Agrega al menos una carta antes de continuar."
      );
      return false;
    }

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.city.trim() ||
      !form.address.trim() ||
      !form.shippingMethod.trim()
    ) {
      setError(
        "Por favor completa todos los campos obligatorios marcados con *."
      );
      return false;
    }

    setError(null);
    return true;
  };

  const handleSendWhatsApp = () => {
    if (!isFormValid()) return;

    setSending(true);

    const itemsText = items
      .map(
        (item) =>
          `• ${item.quantity} x ${item.name} (${item.game}) – $${item.price} c/u`
      )
      .join("\n");

    const message = `
Hola, soy *${form.name}* 👋

Me gustaría hacer el siguiente pedido desde *Once Upon a Deck*:

${itemsText}

*Total:* $${totalPrice.toLocaleString("es-MX")}

*Datos de envío:*
Nombre: ${form.name}
Teléfono: ${form.phone}
Ciudad: ${form.city}
Dirección: ${form.address}
Método de envío: ${form.shippingMethod}
Notas adicionales: ${form.notes || "Ninguna"}

¿Me ayudas a confirmar disponibilidad y forma de pago, por favor? ✨
`.trim();

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    // Abrimos WhatsApp en nueva pestaña
    window.open(url, "_blank");

    setSending(false);
  };

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-[#050816] p-4 text-sm text-gray-400">
        Tu carrito está vacío. Agrega cartas para comenzar tu pedido ✨
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-sm text-gray-100 shadow-md shadow-black/40">
      {/* Resumen del carrito */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#F4D58D]">
            Tu carrito
          </span>
          <button
            onClick={clearCart}
            className="text-[11px] text-gray-400 hover:text-red-300"
          >
            Vaciar
          </button>
        </div>

        <ul className="max-h-40 space-y-2 overflow-y-auto pr-1 text-xs">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between gap-2 border-b border-white/5 pb-2 last:border-b-0"
            >
              <div>
                <p className="font-medium text-gray-100">{item.name}</p>
                <p className="text-[11px] text-gray-400">
                  {item.quantity} x ${item.price} · {item.game}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-[11px] text-gray-400 hover:text-red-300"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-gray-300">
            Total ({totalItems} {totalItems === 1 ? "carta" : "cartas"})
          </span>
          <span className="font-semibold text-[#F4D58D]">
            ${totalPrice.toLocaleString("es-MX")}
          </span>
        </div>
      </div>

      {/* Separador sutil */}
      <div className="h-px w-full bg-gradient-to-r from-[#F4D58D]/40 via-[#7C3AED]/40 to-transparent" />

      {/* Formulario de datos */}
      <div className="space-y-3 text-xs">
        <p className="text-[11px] text-gray-400">
          Completa tus datos para poder preparar tu pedido. Los campos con * son
          obligatorios.
        </p>

        <div className="space-y-2">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-300">
              Nombre completo *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-md border border-white/10 bg-[#050816] px-2 py-1 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              placeholder="Ej. Carlos Ramírez"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-300">
              Teléfono de contacto *
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="rounded-md border border-white/10 bg-[#050816] px-2 py-1 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              placeholder="10 dígitos"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-300">
              Ciudad y estado *
            </label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="rounded-md border border-white/10 bg-[#050816] px-2 py-1 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              placeholder="Ej. Monterrey, Nuevo León"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-300">
              Dirección completa *
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="min-h-[52px] rounded-md border border-white/10 bg-[#050816] px-2 py-1 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              placeholder="Calle, número, colonia, CP, referencias…"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-300">
              Método de envío preferido *
            </label>
            <select
              name="shippingMethod"
              value={form.shippingMethod}
              onChange={handleChange}
              className="rounded-md border border-white/10 bg-[#050816] px-2 py-1 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
            >
              <option value="">Selecciona una opción</option>
              <option value="Paquetería nacional">Paquetería nacional</option>
              <option value="Entrega en Monterrey">Entrega en Monterrey</option>
              <option value="Por definir">Por definir conmigo</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-300">
              Notas adicionales (opcional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="min-h-[48px] rounded-md border border-white/10 bg-[#050816] px-2 py-1 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              placeholder="Horarios, detalles del edificio, cartas que te interesan a futuro…"
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-[11px] text-red-200">
          {error}
        </div>
      )}

      <button
        onClick={handleSendWhatsApp}
        disabled={sending}
        className="mt-1 w-full rounded-lg bg-[#25D366] py-2 text-xs font-semibold text-[#050816] shadow-md shadow-black/40 transition hover:bg-[#1EB257] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Preparando mensaje..." : "Enviar pedido por WhatsApp"}
      </button>
    </div>
  );
}
