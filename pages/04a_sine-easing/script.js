import { gsap } from "gsap";

gsap.to("scroll-to-top", {
  duration: 2.5,
  ease: "power1.inOut",
  y: -500,
  opacity: 1,
});
