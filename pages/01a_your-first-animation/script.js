gsap.to(".card", {
  opacity: 1,
  scale: 1,
  onComplete: () => {
    gsap.to(".card", {
      yoyo: true,
      y: -20,
      repeat: -2,
    });
  },
});
