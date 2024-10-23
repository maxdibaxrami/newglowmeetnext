import confetti from 'canvas-confetti';



const heartConfetti = () => {

  if (typeof window !== 'undefined') {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "😍", scalar });
    const unicorn2 = confetti.shapeFromText({ text: "❤️", scalar });
    const unicorn3 = confetti.shapeFromText({ text: "🥰", scalar });

    
    const defaults = {
      startVelocity: 40,
      scalar,
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 , x:0.6 },
    };

    confetti({
      ...defaults,
      particleCount: 30,
      shapes:[unicorn3]
    });
  
    confetti({
      ...defaults,
      particleCount: 15,
      shapes:[unicorn2]
    });
  
    confetti({
      ...defaults,
      particleCount: 15,
      flat: true,
      shapes: [unicorn],
      scalar: scalar * 1.4,
    });
  }
  
};

export { heartConfetti };
