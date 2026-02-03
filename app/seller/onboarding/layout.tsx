import { ProgressHeader } from "@/components/seller/layout";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      <ProgressHeader step={2} total={2} />
      <main>{children}</main>
    </div>
  );
}
