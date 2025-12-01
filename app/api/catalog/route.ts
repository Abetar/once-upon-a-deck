// app/api/catalog/route.ts
import { NextResponse } from "next/server";
import type { Product } from "../../components/partnershop/productsData";

const APITCG_BASE = "https://apitcg.com/api";
const YUGIOH_BASE = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const APITCG_API_KEY = process.env.APITCG_API_KEY;

const USD_TO_MXN = Number(process.env.USD_TO_MXN ?? "18");

type GameKey = "pokemon" | "magic" | "onepiece" | "yugioh";

type SourceConfig =
  | {
      key: Exclude<GameKey, "yugioh">;
      label: string;
      type: "apitcg";
      path: string;
    }
  | {
      key: "yugioh";
      label: string;
      type: "ygoprodeck";
    };

const SOURCES: SourceConfig[] = [
  {
    key: "pokemon",
    label: "Pokémon TCG",
    type: "apitcg",
    path: "pokemon",
  },
  {
    key: "magic",
    label: "Magic: The Gathering",
    type: "apitcg",
    path: "magic",
  },
  {
    key: "onepiece",
    label: "One Piece Card Game",
    type: "apitcg",
    path: "one-piece",
  },
  {
    key: "yugioh",
    label: "Yu-Gi-Oh!",
    type: "ygoprodeck",
  },
];

// ------------ Helpers ------------ //

async function fetchFromApiTcg(
  path: string,
  gameLabel: string,
  q: string | null,
  limit = 40
): Promise<Product[]> {
  if (!APITCG_API_KEY) {
    console.error("Falta APITCG_API_KEY en .env.local");
    return [];
  }

  const url = new URL(`${APITCG_BASE}/${path}/cards`);
  if (q) {
    // ApiTCG usa `name` para búsqueda por nombre
    url.searchParams.set("name", q);
  }
  url.searchParams.set("limit", String(limit));

  const res = await fetch(url.toString(), {
    cache: "no-store",
    headers: {
      "x-api-key": APITCG_API_KEY,
    },
  });

  if (!res.ok) {
    console.error("ApiTCG error:", res.status, await res.text());
    return [];
  }

  const json = await res.json();
  const cards: any[] = Array.isArray(json.data) ? json.data : [];

  return cards.slice(0, limit).map((card): Product => {
    const rarity =
      card.rarity ||
      card.set?.rarity ||
      card.set?.rarityName ||
      "Raridad desconocida";

    const image =
      card.images?.large ||
      card.images?.small ||
      card.imageUrl ||
      card.image ||
      "";

    return {
      id: String(card.id ?? card.code ?? card.number ?? card.name),
      name: card.name,
      game: gameLabel,
      rarity,
      image,
      // ApiTCG no trae precio -> 0 = "Cotizar por WhatsApp"
      price: 0,
    };
  });
}


async function fetchFromYgoprodeck(
  q: string | null,
  limit = 40
): Promise<Product[]> {
  // Si no hay búsqueda, usamos una muy amplia para mostrar algo
  const search = q && q.trim().length > 0 ? q.trim() : "a";

  const url = new URL(YUGIOH_BASE);
  url.searchParams.set("fname", search);  // fuzzy search
  url.searchParams.set("num", String(limit));
  url.searchParams.set("offset", "0");

  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("YGOPRODeck error:", res.status, await res.text());
    return [];
  }

  const json = await res.json();
  const cards: any[] = Array.isArray(json.data) ? json.data : [];

  return cards.slice(0, limit).map((card): Product => {
    const rarity =
      card.card_sets?.[0]?.set_rarity ||
      card.type ||
      "Raridad desconocida";

    const image =
      card.card_images?.[0]?.image_url ||
      card.card_images?.[0]?.image_url_small ||
      "";

    // Precio en USD que viene de YGOPRODeck
    const rawUsd = card.card_prices?.[0]?.tcgplayer_price;
    const priceUsd = rawUsd && !Number.isNaN(Number(rawUsd))
      ? Number(rawUsd)
      : 0;

    // 🔥 Convertimos a MXN usando el tipo de cambio
    const priceMxn =
      priceUsd > 0 ? Math.round(priceUsd * USD_TO_MXN) : 0;

    return {
      id: String(card.id),
      name: card.name,
      game: "Yu-Gi-Oh!",
      rarity,
      image,
      // En MXN; si queda 0, el front lo mostrará como "Cotizar"
      price: priceMxn,
    };
  });
}


// ------------ Handler ------------ //

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const qParam = searchParams.get("q");
    const gameParam = searchParams.get("game");

    const q = qParam && qParam.trim().length > 0 ? qParam.trim() : null;
    const game = (gameParam || "all").toLowerCase() as GameKey | "all";

    const activeSources =
      game === "all"
        ? SOURCES
        : SOURCES.filter((s) => s.key === game);

    const resultsPromises = activeSources.map((source) => {
      if (source.type === "apitcg") {
        return fetchFromApiTcg(source.path, source.label, q, 40);
      }
      return fetchFromYgoprodeck(q, 40);
    });

    const results = await Promise.all(resultsPromises);
    const products = results.flat();

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error in /api/catalog:", error);
    return NextResponse.json(
      { error: "Error al cargar el catálogo" },
      { status: 500 }
    );
  }
}
