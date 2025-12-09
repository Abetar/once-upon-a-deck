import Image from "next/image";

export function ShippingInfoSection() {
  return (
    <section className="relative py-20">
      {/* Imagen de fondo suave */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/sunny_one_piece.jpg" // ← tu fondo suave
          alt="Envíos desde Monterrey"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-2 text-sm uppercase tracking-wider text-[#F4D58D]">
          Envíos
        </p>

        <h2 className="mb-3 text-3xl font-semibold text-white">
          Desde Monterrey hasta donde llegue la historia
        </h2>

        <p className="mb-8 max-w-2xl text-gray-300">
          Preparamos cada envío con fundas, protección y empaque adecuado para
          que tus cartas lleguen listas para jugar o exhibir, sin importar en
          qué parte del mapa estés.
        </p>

        {/* Hero del barco / mapa de envío */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-xl aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <video
              src="/shipping-hero-ship_new.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover scale-110 animate-slowZoom"
            />
          </div>
        </div>

        {/* Grid de detalles */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
            <h3 className="mb-2 font-semibold text-white">
              Cuidado del empaque
            </h3>
            <p className="text-sm text-gray-300">
              Usamos sleeves, top loaders y material de protección para que tus
              cartas lleguen en el estado que esperas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
            <h3 className="mb-2 font-semibold text-white">
              Envíos desde Monterrey
            </h3>
            <p className="text-sm text-gray-300">
              Coordinamos el envío contigo por WhatsApp para elegir la mejor
              opción según tu ciudad y urgencia.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
            <h3 className="mb-2 font-semibold text-white">
              Comunicación directa
            </h3>
            <p className="text-sm text-gray-300">
              Te mantenemos al tanto del proceso: confirmación de pago, armado
              del paquete y datos de rastreo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
