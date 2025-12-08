// app/page.tsx
import { HeroSection } from "./components/home/HeroSection";
import { HighlightStrip } from "./components/home/HighlightStrip";
import { GamesShowcaseSection } from "./components/home/GamesShowcaseSection";
import { HowToBuySection } from "./components/home/HowToBuySection";
import { ShippingInfoSection } from "./components/home/ShippingInfoSection";
import { TrustSection } from "./components/home/TrustSection";
// import { FAQSection } from "./components/home/FAQSection";
import { FinalCTASection } from "./components/home/FinalCTASection";
import { PartnerSection } from "./components/home/PartnerSection";
import { ClientFaqCta } from "./components/home/ClientFaqCta";
// import { PartnerFaqSection } from "./components/home/PartnerFaqSection";




export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightStrip />
      <PartnerSection />
      {/* <PartnerFaqSection /> */}
      <GamesShowcaseSection />
      <HowToBuySection />
      <ShippingInfoSection />
      <TrustSection />
      <ClientFaqCta />
      {/* <FAQSection /> */}
      <FinalCTASection />
    </>
  );
}
