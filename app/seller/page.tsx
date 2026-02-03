import {
  HeroSection,
  WhySellSection,
  HowItWorksSection,
  ShowcaseSection,
  StandardsBanner,
} from "@/components/seller/sections";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <WhySellSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <StandardsBanner />
      </main>
    </div>
  );
}
