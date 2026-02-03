"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Header from "./Header";
import MinimalHeader from "./MinimalHeader";
import Footer from "./Footer";

type LayoutSwitcherProps = {
  children: React.ReactNode;
};

export default function LayoutSwitcher({ children }: LayoutSwitcherProps) {
  const segment = useSelectedLayoutSegment();

  const isMinimal = segment === "register" || segment === "onboarding";

  return (
    <>
      {isMinimal ? <MinimalHeader /> : <Header />}
      <main className="flex-1">{children}</main>
      {isMinimal ? null : <Footer />}
    </>
  );
}
