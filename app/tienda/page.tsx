// app/tienda/page.tsx
"use client";

import { useEffect, useState } from "react";
import type { Product } from "../components/partnershop/productsData";
import { CartProvider } from "../components/partnershop/cart/CartContext";
import { ProductGrid } from "../components/partnershop/ProductGrid";
import { CartSummary } from "../components/partnershop/CartSummary";

const GAME_OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "pokemon", label: "Pokémon TCG" },
  { value: "yugioh", label: "Yu-Gi-Oh!" },
  { value: "magic", label: "Magic: The Gathering" },
  { value: "onepiece", label: "One Piece Card Game" },
];

export default function TiendaPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [gameFilter, setGameFilter] = useState<string>("all");
  const [rarityFilter, setRarityFilter] = useState<string>("all");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Raridades dinámicas en función de los productos cargados
  const rarities = Array.from(
    new Set(
      products
        .map((p) => p.rarity)
        .filter((r) => r && r !== "Raridad desconocida")
    )
  ).sort();

  const filteredProducts = products.filter((product) => {
    if (
      rarityFilter !== "all" &&
      product.rarity.toLowerCase() !== rarityFilter.toLowerCase()
    ) {
      return false;
    }
    return true;
  });

  async function fetchProducts(params?: { q?: string; game?: string }) {
    try {
      setLoading(true);
      setErrorMessage(null);

      const url = new URL("/api/catalog", window.location.origin);

      if (params?.q && params.q.trim().length > 0) {
        url.searchParams.set("q", params.q.trim());
      }
      if (params?.game && params.game !== "all") {
        url.searchParams.set("game", params.game);
      }

      const res = await fetch(url.toString(), { method: "GET" });

      if (!res.ok) {
        throw new Error("Error en la petición");
      }

      const data = await res.json();
      setProducts(data.products ?? []);
    } catch (err) {
      console.error(err);
      setErrorMessage(
        "Ocurrió un error al cargar las cartas. Intenta de nuevo."
      );
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  // Carga inicial: todo el catálogo (game = all, sin q)
  useEffect(() => {
    fetchProducts({ game: "all" });
  }, []);

  const handleSearch = () => {
    fetchProducts({
      q: searchTerm,
      game: gameFilter,
    });
  };

  const handleGameChange = (value: string) => {
    setGameFilter(value);
    fetchProducts({
      q: searchTerm,
      game: value,
    });
  };

  const handleRarityChange = (value: string) => {
    setRarityFilter(value);
  };

  return (
    <CartProvider>
      <main className="min-h-screen bg-[#050816] text-gray-100">
        <section className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
          <header className="mb-8 lg:mb-10">
            <h1 className="text-3xl font-extrabold text-[#F4D58D] lg:text-4xl">
              Tienda
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-gray-300 lg:text-base">
              Explora cartas de Pokémon, Yu-Gi-Oh! y Magic: The Gathering de
              nuestro catálogo general. Agrega al carrito y envía tu pedido por
              WhatsApp para cotizar o comprar.
            </p>
          </header>

          {/* Barra de filtros */}
          <div className="mb-6 space-y-4 rounded-2xl border border-white/10 bg-[#0B1020] p-4 shadow-md shadow-black/40">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              {/* Buscar por nombre */}
              <div className="flex-1">
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Buscar por nombre
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ej. Charizard, Dark Magician, Luffy..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-10 flex-1 rounded-lg border border-white/10 bg-[#050816] px-3 text-sm text-gray-100 outline-none ring-0 focus:border-[#F4D58D] focus:ring-1 focus:ring-[#F4D58D]"
                  />
                  <button
                    onClick={handleSearch}
                    className="h-10 rounded-lg bg-[#F4D58D] px-4 text-sm font-semibold text-[#050816] transition hover:bg-[#C9A656]"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>

            {/* Selectores de juego y rareza */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="w-full md:w-1/3">
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Juego
                </label>
                <select
                  value={gameFilter}
                  onChange={(e) => handleGameChange(e.target.value)}
                  className="h-10 w-full rounded-lg border border-white/10 bg-[#050816] px-3 text-sm text-gray-100 outline-none focus:border-[#F4D58D] focus:ring-1 focus:ring-[#F4D58D]"
                >
                  {GAME_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full md:w-1/3">
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Rareza
                </label>
                <select
                  value={rarityFilter}
                  onChange={(e) => handleRarityChange(e.target.value)}
                  className="h-10 w-full rounded-lg border border-white/10 bg-[#050816] px-3 text-sm text-gray-100 outline-none focus:border-[#F4D58D] focus:ring-1 focus:ring-[#F4D58D]"
                >
                  <option value="all">Todas</option>
                  {rarities.map((rarity) => (
                    <option key={rarity} value={rarity}>
                      {rarity}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-1 text-xs text-gray-400">
              Mostrando {filteredProducts.length} cartas.
            </p>
          </div>

          {/* Contenido principal: grid + carrito */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
            <div>
              {errorMessage ? (
                <div className="rounded-xl border border-red-500/60 bg-red-500/10 p-4 text-sm text-red-200">
                  {errorMessage}
                </div>
              ) : loading ? (
                <p className="text-sm text-gray-300">
                  Cargando cartas...
                </p>
              ) : (
                <ProductGrid products={filteredProducts} />
              )}

              {!loading &&
                !errorMessage &&
                filteredProducts.length === 0 && (
                  <p className="mt-4 text-sm text-gray-400">
                    No encontramos cartas que coincidan con tu búsqueda. Prueba
                    con otro nombre o rareza.
                  </p>
                )}
            </div>

            <CartSummary />
          </div>
        </section>
      </main>
    </CartProvider>
  );
}
