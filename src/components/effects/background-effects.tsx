export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-primary-light/6 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary-lighter/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </div>
  );
}

export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}
