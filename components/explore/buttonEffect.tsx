import confetti from "canvas-confetti";

const heartConfetti = () => {
  if (typeof window !== "undefined") {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "😍", scalar });
    const unicorn2 = confetti.shapeFromText({ text: "❤️", scalar });
    const unicorn3 = confetti.shapeFromText({ text: "🥰", scalar });

    const defaults = {
      startVelocity: 40,
      scalar,
      particleCount: 5,
      spread: 40,
      origin: { y: 0.8, x: 0.6 },
    };

    confetti({
      ...defaults,
      particleCount: 5,
      shapes: [unicorn3],
    });

    confetti({
      ...defaults,
      particleCount: 5,
      shapes: [unicorn2],
    });

    confetti({
      ...defaults,
      particleCount: 5,
      flat: true,
      shapes: [unicorn],
      scalar: scalar * 1.4,
    });
  }
};

const MatchConfetti = () => {
  const colors = ["#bb0000", "#ffffff"];
  const end = Date.now() + 3 * 1000;

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export { heartConfetti, MatchConfetti };
