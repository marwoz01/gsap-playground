import gsap from "gsap";

const buttons = document.querySelectorAll(".reactions button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gsap.fromTo(
      button,
      {
        y: 0,
        rotation: 0,
        opacity: 1,
      },
      {
        y: -100,
        duration: 1,
        ease: "power2.out",
        scale: 1.4,
        rotation: 20,
        opacity: 0,
      },
    );
  });
});
