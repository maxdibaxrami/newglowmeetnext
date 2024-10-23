import confetti from 'canvas-confetti';



const heartConfetti = () => {

  if (typeof window !== 'undefined') {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "😍", scalar });
  
    const defaults = {
      startVelocity: 40,
      shapes: [unicorn],
      scalar,
      particleCount: 100,
      spread: 70,
      origin: { y: 0.9 },
    };
    
    confetti({
      ...defaults,
      particleCount: 30,
    });
  
    confetti({
      ...defaults,
      particleCount: 5,
    });
  
    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
    });
  }
  
};

export { heartConfetti };
