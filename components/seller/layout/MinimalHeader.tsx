export default function MinimalHeader() {
  return (
    <header className="h-16 bg-primary">
      <div className="mx-auto max-w-[1200px] h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-tight">
          Surprez
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-6 text-sm text-white">
          <a href="/help" className="hover:underline">
            Help
          </a>
          <a href="/support" className="hover:underline">
            Contact Support
          </a>
          <a
            href="/login"
            className="bg-white text-[#7AC143] px-4 py-1.5 rounded-full font-medium"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
