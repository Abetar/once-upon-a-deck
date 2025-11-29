"use client";

import { ReactNode } from "react";
import { CartProvider } from "../../components/tienda/cart/CartContext";

export function RootProviders({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
