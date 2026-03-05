import {
  CategoriesSection,
  FeaturesBanner,
  PromoSection,
} from "@/components/customer/categories";

export default function Categories() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <main className="flex-1">
        <PromoSection />
        <CategoriesSection />
        <FeaturesBanner />
      </main>
    </div>
  );
}
