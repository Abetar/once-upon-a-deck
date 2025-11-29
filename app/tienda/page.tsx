"use client";

import { useMemo, useState } from "react";
import { Container } from "../components/common/Container";
import { ProductGrid } from "../components/tienda/ProductGrid";
import { CartSummary } from "../components/tienda/CartSummary";
import { products } from "../components/tienda/productsData";

export default function TiendaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rarityFilter, setRarityFilter] = useState<"all" | string>("all");

  // Rarezas únicas para el select
  const rarities = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.rarity))).sort((a, b) =>
        a.localeCompare(b)
      ),
    []
  );

  // Productos filtrados por nombre + rareza
  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return products.filter((p) => {
      const matchesName = term === "" || p.name.toLowerCase().includes(term);
      const matchesRarity = rarityFilter === "all" || p.rarity === rarityFilter;
      return matchesName && matchesRarity;
    });
  }, [searchTerm, rarityFilter]);

  const handleScrollToCart = () => {
    const el = document.getElementById("cart-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-[#050816] py-12">
      <Container>
        {/* Encabezado */}
        <div className="mb-6 space-y-2">
          <h1 className="text-3xl font-bold text-[#F4D58D]">Tienda</h1>
          <p className="text-sm text-gray-300">
            Explora cartas de Pokémon, Yu-Gi-Oh! y Magic: The Gathering. Agrega
            tus favoritas al carrito y envía tu pedido directo por WhatsApp.
          </p>
        </div>

        {/* Controles de búsqueda y filtros */}
        <div className="mb-6 space-y-3 rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-xs text-gray-100">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            {/* Buscador por nombre */}
            <div className="flex-1">
              <label className="mb-1 block text-[11px] text-gray-300">
                Buscar por nombre de carta
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ej. Charizard, Dark Magician..."
                className="w-full rounded-md border border-white/10 bg-[#050816] px-3 py-2 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              />
            </div>

            {/* Filtro por rareza */}
            <div className="w-full sm:w-56">
              <label className="mb-1 block text-[11px] text-gray-300">
                Filtrar por rareza
              </label>
              <select
                value={rarityFilter}
                onChange={(e) =>
                  setRarityFilter(
                    e.target.value === "all" ? "all" : e.target.value
                  )
                }
                className="w-full rounded-md border border-white/10 bg-[#050816] px-3 py-2 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              >
                <option value="all">Todas las rarezas</option>
                {rarities.map((rarity) => (
                  <option key={rarity} value={rarity}>
                    {rarity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Info de resultados */}
          <p className="text-[11px] text-gray-400">
            Mostrando {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "carta" : "cartas"}.
          </p>
        </div>

        {/* Grid productos + carrito */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)]">
          <ProductGrid products={filteredProducts} />

          {/* Carrito con id para scroll */}
          <div id="cart-section">
            <CartSummary />
          </div>
        </div>
      </Container>
      <button
        onClick={handleScrollToCart}
        className="fixed bottom-20 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4D58D] text-[#050816] shadow-lg shadow-black/50 transition hover:bg-[#C9A656] lg:hidden animate-mystic-float"
      >
        {/* Ícono pro */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 text-[#050816]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </button>
    </section>
  );
}
