import { Suspense } from "react";
import StorePageClient from "./StorePageClient";

export default function OnceUponADeckStorePage() {
  return (
    <Suspense
      fallback={
        <section className="bg-[#050816] py-12">
          <div className="mx-auto max-w-6xl px-6 text-sm text-gray-300">
            Cargando Once Upon a Deck Store...
          </div>
        </section>
      }
    >
      <StorePageClient />
    </Suspense>
  );
}
