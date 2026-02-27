import {
  CategoriesSection,
  CTASection,
  HeroGridSection,
  HowSurprezWorksSection,
  SurpriseDealsSection,
  TrendingSection,
  WhyChooseUsSection,
} from "@/components/customer/home";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroGridSection />
        <CategoriesSection />
        <TrendingSection />
        <SurpriseDealsSection />
        <WhyChooseUsSection />
        <HowSurprezWorksSection />
        <CTASection />
      </main>
    </div>
  );
}
