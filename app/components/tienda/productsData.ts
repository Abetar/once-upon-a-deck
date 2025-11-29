export type Product = {
  id: number;
  name: string;
  price: number;
  game: string;
  image: string;
  rarity: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Charizard VMAX - Rainbow Rare",
    price: 1800,
    game: "Pokémon",
    image: "/products/charizard.png",
    rarity: "Secret Rare",
  },
  {
    id: 2,
    name: "Dark Magician - 20th Anniversary",
    price: 950,
    game: "Yu-Gi-Oh!",
    image: "/products/darkmagician.png",
    rarity: "Ultra Rare",
  },
  {
    id: 3,
    name: "Sol Ring - Commander Masters",
    price: 120,
    game: "Magic: The Gathering",
    image: "/products/solring.png",
    rarity: "Uncommon",
  },
  // luego puedes agregar más productos aquí
];
