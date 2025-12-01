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
};

// Opcional: productos de fallback por si la API falla (puedes borrarlo si no lo quieres)
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
  },
];
