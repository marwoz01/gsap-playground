import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.5,
    ease: "power1.in",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    duration: 0.5,
    ease: "power1.out",
    rotateY: 0,
  });
});
