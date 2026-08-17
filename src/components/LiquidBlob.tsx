export default function LiquidBlob({
  className = "",
  opacity = 0.3,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute animate-blob-move ${className}`}
      style={{
        opacity,
        background:
          "radial-gradient(circle at 30% 30%, rgba(45,212,191,0.55), transparent 50%)," +
          "radial-gradient(circle at 65% 20%, rgba(163,230,53,0.4), transparent 50%)," +
          "radial-gradient(circle at 75% 65%, rgba(249,115,22,0.4), transparent 50%)," +
          "radial-gradient(circle at 25% 70%, rgba(217,70,239,0.4), transparent 50%)",
        filter: "blur(90px)",
      }}
      aria-hidden
    />
  );
}
