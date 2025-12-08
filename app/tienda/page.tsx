// app/tienda/page.tsx
import { redirect } from "next/navigation";
import TiendaClientPage from "./TiendaClientePage";

export default function TiendaPage() {
  // En producción redirigimos a Once Upon a Deck Store
  if (process.env.NODE_ENV === "production") {
    redirect("/once-upon-a-deck-store");
  }

  // En desarrollo sigues viendo la página de pruebas
  return <TiendaClientPage />;
}