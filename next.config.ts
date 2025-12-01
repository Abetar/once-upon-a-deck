// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Airtable (partnershop)
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
        port: "",
        pathname: "/**",
      },
      // Pokémon
      {
        protocol: "https",
        hostname: "images.pokemontcg.io",
        port: "",
        pathname: "/**",
      },
      // One Piece
      {
        protocol: "https",
        hostname: "en.onepiece-cardgame.com",
        port: "",
        pathname: "/**",
      },
      // Digimon
      {
        protocol: "https",
        hostname: "world.digimoncard.com",
        port: "",
        pathname: "/**",
      },
      // Dragon Ball / otros
      {
        protocol: "https",
        hostname: "www.dbs-cardgame.com",
        port: "",
        pathname: "/**",
      },
      // Api genérica que ya viste antes
      {
        protocol: "https",
        hostname: "cdn.malie.io",
        port: "",
        pathname: "/**",
      },
      // 🔥 NUEVO: imágenes de Magic desde Scryfall
      {
        protocol: "https",
        hostname: "cards.scryfall.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ygoprodeck.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
