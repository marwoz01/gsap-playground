import { gsap } from "gsap";

gsap.to(".btn", {
  y: -30,
  duration: 3,
  ease: "power4.out",
});

gsap.to(".toast", {
  x: 120,
  duration: 1,
  ease: "power1.inOut",
});

gsap.to(".card", {
  y: 80,
  duration: 2,
  ease: "power2.in",
  opacity: 0,
});
