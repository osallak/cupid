"use client";

export function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="hearts-bg">
          {/* First row */}
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          {/* Second row */}
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          {/* Third row */}
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
        </div>
      </div>
    </div>
  );
}
