// components/tienda/productsData.ts

// Tipo base que usaremos en la tienda
export type Product = {
  id: string;          // ID de Airtable (record.id)
  name: string;
  price: number;
  game: string;
  image: string;
  rarity: string;
  condition?: string;
  stock?: number;
  sealed?: boolean;    // 👈 NUEVO: true si la carta está sellada
};

// Opcional: productos de fallback por si la API falla
export const fallbackProducts: Product[] = [
  {
    id: "fallback-1",
    name: "Charizard VMAX - Rainbow Rare",
    price: 1800,
    game: "Pokémon",
    image: "/products/charizard.png",
    rarity: "Secret Rare",
    condition: "Near Mint (NM)",
    stock: 1,
    sealed: false, // 👈 Añado sellado
  },
  {
    id: "fallback-2",
    name: "Dark Magician - 20th Anniversary",
    price: 950,
    game: "Yu-Gi-Oh!",
    image: "/products/darkmagician.png",
    rarity: "Ultra Rare",
    condition: "Lightly Played (LP)",
    stock: 1,
    sealed: true, // 👈 Añado sellado
  },
];
