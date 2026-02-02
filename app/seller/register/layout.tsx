import { ProgressHeader } from "../components";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      <ProgressHeader step={1} total={2} />
      <main>{children}</main>
    </div>
  );
}
