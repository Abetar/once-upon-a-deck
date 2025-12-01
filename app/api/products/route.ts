import { NextResponse } from "next/server";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;
const AIRTABLE_VIEW_NAME = process.env.AIRTABLE_VIEW_NAME || "Tienda (Activos)";

type AirtableAttachment = {
  url: string;
};

type AirtableRecord = {
  id: string;
  fields: {
    "Nombre de la carta"?: string;
    Juego?: string;
    Rareza?: string;
    Condicion?: string;
    "Precio"?: number;
    Stock?: number;
    Imagen?: AirtableAttachment[];
  };
};

export async function GET() {
  if (
    !AIRTABLE_API_KEY ||
    !AIRTABLE_BASE_ID ||
    !AIRTABLE_TABLE_NAME
  ) {
    return NextResponse.json(
      { error: "Faltan variables de entorno de Airtable." },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    view: AIRTABLE_VIEW_NAME,
  });

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
    AIRTABLE_TABLE_NAME
  )}?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
    // Para que siempre lea cambios recientes de Airtable:
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Error Airtable:", text);
    return NextResponse.json(
      { error: "No se pudieron obtener las cartas desde Airtable." },
      { status: 500 }
    );
  }

  const data = await res.json();

  const records: AirtableRecord[] = data.records || [];

  const products = records.map((record) => {
    const f = record.fields;

    const imageUrl =
      Array.isArray(f.Imagen) && f.Imagen[0]?.url
        ? f.Imagen[0].url
        : "/placeholder-card.png"; // puedes poner una imagen por defecto

    return {
      id: record.id,
      name: f["Nombre de la carta"] ?? "Carta sin nombre",
      game: f.Juego ?? "Otro",
      rarity: f.Rareza ?? "Sin rareza",
      price: f["Precio"] ?? 0,
      image: imageUrl,
      condition: f["Condicion"] ?? "",
      stock: f.Stock ?? 1,
    };
  });

  return NextResponse.json({ products });
}
