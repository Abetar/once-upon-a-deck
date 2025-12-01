// components/tienda/ProductGrid.tsx

import { ProductCard } from "./ProductCard";
import type { Product } from "./productsData";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <p className="text-sm text-gray-400">
        No encontramos cartas que coincidan con tu búsqueda. Prueba con otro
        nombre o rareza.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          game={product.game}
          image={product.image}
          rarity={product.rarity}
        />
      ))}
    </div>
  );
}
