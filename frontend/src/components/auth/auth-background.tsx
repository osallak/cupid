"use client";

export function AuthBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background" />

      {/* Hearts background */}
      <div className="absolute inset-0 opacity-30">
        <div className="hearts-bg">
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
        </div>
      </div>

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
    </div>
  );
}
