// Import necessary dependencies
import confetti from "canvas-confetti";


var scalar = 2;
var unicorn = confetti.shapeFromText({ text: '😍', scalar });

var defaults = {
  startVelocity: 40,
  shapes: [unicorn],
  scalar,
  particleCount: 100,
  spread: 70,
  origin: { y: 0.9 }
};

origin: { y: 0.6 }
const heartConfetti= () => {
  confetti({
    ...defaults,
    particleCount: 30
  });

  confetti({
    ...defaults,
    particleCount: 5,
    flat: true
  });

  confetti({
    ...defaults,
    particleCount: 15,
    scalar: scalar / 2,
    shapes: ['circle']
  });
}

// Custom confetti for sad emoji
const sadConfetti = () => {
  if (typeof window !== "undefined") {
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 55,
      origin: { y: 0.6 },
      shapes: ["🚫"]
    });
  }
};

export { heartConfetti, sadConfetti };
