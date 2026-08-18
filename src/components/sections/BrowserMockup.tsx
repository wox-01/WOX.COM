import Image from "next/image";

export default function BrowserMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border shadow-[0_60px_120px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-4 border-b border-border bg-white/[0.03] px-4 py-3 sm:px-5">
        <div className="flex shrink-0 gap-2">
          <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-muted">
            <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <rect x="5" y="10.5" width="14" height="9" rx="1.5" />
              <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
            </svg>
            wox.com
          </div>
        </div>
        <div className="w-[52px] shrink-0 sm:w-[68px]" />
      </div>

      <div className="relative flex aspect-[9/4] items-center justify-center bg-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-30 blur-3xl"
          style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, white, transparent 70%)" }}
        />
        <Image
          src="/WOX.COM/logo-v2.webp"
          alt="WOX"
          width={520}
          height={160}
          className="relative w-[42%] max-w-[420px]"
        />
      </div>
    </div>
  );
}
