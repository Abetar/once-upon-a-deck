"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Container } from "../components/common/Container";
import { ProductGrid } from "../components/partnershop/ProductGrid";
import { CartSummary } from "../components/partnershop/CartSummary";
import type { Product } from "../components/partnershop/productsData";
import { fallbackProducts } from "../components/partnershop/productsData";

/* helpers --------------------------------------------------- */

// Normaliza texto: minúsculas, sin acentos
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // quita acentos
}

// Convierte el nombre del juego en un slug estable
// Ej: "Pokémon TCG" -> "pokemon"
//     "Yu-Gi-Oh!"   -> "yugioh"
//     "Magic: The Gathering" -> "magic-the-gathering"
//     "One Piece"   -> "one-piece"
function slugifyGame(gameName: string): string {
  const n = normalize(gameName);

  if (n.includes("pokemon")) return "pokemon";
  if (n.includes("yu-gi-oh") || n.includes("yugioh")) return "yugioh";
  if (n.includes("lorcana")) return "lorcana";
  if (n.includes("one piece") || n.includes("onepiece")) return "one-piece";
  if (n.includes("magic")) return "magic-the-gathering";

  // fallback genérico
  return n.replace(/\s+/g, "-");
}

// Mapea lo que venga en ?game= a nuestro slug interno
function mapSlugToGame(slug: string | null): "all" | string {
  if (!slug) return "all";
  const s = normalize(slug);

  if (s === "pokemon") return "pokemon";
  if (s === "yugioh" || s === "yu-gi-oh") return "yugioh";
  if (s === "lorcana") return "lorcana";
  if (s === "one-piece" || s === "onepiece") return "one-piece";
  if (s === "magic" || s === "magic-the-gathering") return "magic-the-gathering";

  // si no lo reconocemos, usamos tal cual normalizado
  return s;
}

/* page ------------------------------------------------------ */

export default function OnceUponADeckStorePage() {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [rarityFilter, setRarityFilter] = useState<"all" | string>("all");
  const [gameFilter, setGameFilter] = useState<"all" | string>("all");

  // Leer ?game= del URL cada vez que cambie
  useEffect(() => {
    const slug = mapSlugToGame(searchParams.get("game"));
    setGameFilter(slug);
  }, [searchParams]);

  // Cargar productos desde la API de Next (que a su vez lee Airtable)
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products", { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Error al cargar productos");
        }
        const data = await res.json();
        const apiProducts: Product[] = data.products || [];

        if (!apiProducts.length) {
          setProducts([]);
        } else {
          setProducts(apiProducts);
        }
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las cartas. Intenta más tarde.");
        setProducts(fallbackProducts); // fallback local
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Rarezas únicas
  const rarities = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.rarity))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [products]
  );

  // Juegos únicos (los mostramos con su nombre original,
  // pero el value del <option> será el slug)
  const games = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.game))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [products]
  );

  // Productos filtrados por nombre + rareza + juego
  const filteredProducts = useMemo(() => {
    const term = normalize(searchTerm.trim());

    return products.filter((p) => {
      const matchesName =
        term === "" || normalize(p.name).includes(term);

      const matchesRarity =
        rarityFilter === "all" || p.rarity === rarityFilter;

      const matchesGame =
        gameFilter === "all" ||
        slugifyGame(p.game) === gameFilter;

      return matchesName && matchesRarity && matchesGame;
    });
  }, [products, searchTerm, rarityFilter, gameFilter]);

  // Scroll al carrito (usado por el botón flotante en mobile)
  const handleScrollToCart = () => {
    const el = document.getElementById("cart-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Estado de carga
  if (loading) {
    return (
      <section className="bg-[#050816] py-12">
        <Container>
          <p className="text-sm text-gray-300">Cargando cartas...</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[#050816] py-12">
      <Container>
        {/* Encabezado */}
        <div className="mb-6 space-y-2">
          <h1 className="text-3xl font-bold text-[#F4D58D]">
            Once Upon a Deck Store
          </h1>
          <p className="text-sm text-gray-300">
            Explora cartas de Pokémon, Yu-Gi-Oh!, Magic: The Gathering y más.
            Agrega tus favoritas al carrito y envía tu pedido directo por
            WhatsApp.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
            {error}
          </div>
        )}

        {/* Controles */}
        <div className="mb-6 space-y-3 rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-xs text-gray-100">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            {/* Buscador */}
            <div className="flex-1 min-w-[220px]">
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

            {/* Filtro por juego */}
            <div className="w-full sm:w-52">
              <label className="mb-1 block text-[11px] text-gray-300">
                Filtrar por juego
              </label>
              <select
                value={gameFilter}
                onChange={(e) =>
                  setGameFilter(
                    e.target.value === "all" ? "all" : e.target.value
                  )
                }
                className="w-full rounded-md border border-white/10 bg-[#050816] px-3 py-2 text-xs text-gray-100 outline-none focus:border-[#F4D58D]"
              >
                <option value="all">Todos los juegos</option>
                {games.map((game) => (
                  <option key={game} value={slugifyGame(game)}>
                    {game}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por rareza */}
            <div className="w-full sm:w-52">
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

          <p className="text-[11px] text-gray-400">
            Mostrando {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "carta" : "cartas"}.
          </p>
        </div>

        {/* Grid productos + carrito */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)]">
          <ProductGrid products={filteredProducts} />

          <div id="cart-section">
            <CartSummary />
          </div>
        </div>
      </Container>

      {/* Botón flotante "Ir al carrito" – SOLO MOBILE */}
      <button
        onClick={handleScrollToCart}
        className="fixed bottom-20 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4D58D] text-[#050816] shadow-lg shadow-black/50 transition hover:bg-[#C9A656] lg:hidden animate-mystic-float"
      >
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
