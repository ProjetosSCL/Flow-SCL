import confetti from "canvas-confetti";

export function triggerConfetti(originX = 0.5, originY = 0.6) {
  // Canhão de confetes dourados e festivos
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { x: originX, y: originY },
    colors: ["#F59E0B", "#FCD34D", "#94A3B8", "#D97706", "#10B981", "#3B82F6"],
    disableForReducedMotion: true,
  });
}

export function triggerGoldenFireworks() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#F59E0B", "#FCD34D", "#FFFFFF", "#FBBF24"],
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#F59E0B", "#FCD34D", "#FFFFFF", "#FBBF24"],
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}
