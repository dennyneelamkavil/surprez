import { HeroGridSection } from "@/components/customer/sections";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroGridSection />
      </main>
    </div>
  );
}
