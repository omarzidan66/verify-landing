// gsap.to("#bear", {
//   y: -15,
//   duration: 2.5,
//   ease: "sine.inOut",
//   repeat: -1,
//   yoyo: true,
// });

gsap.to("#leaf-container", {
  duration: 2,
  rotationY: 10,
  rotationX: 20,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to("#living-leaves", {
  duration: 2,
  x: "4%",
  rotation: 5,
  scale: 1.15,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to("#top-leaf-container", {
  duration: 2.5,
  rotationY: -20,
  rotationX: 25,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to("#top-leaves", {
  duration: 3,
  x: "-5%",
  scale: 1.15,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

const scene = document.getElementById("scene");

scene.addEventListener("mousemove", (e) => {
  const xPos = e.clientX / window.innerWidth - 0.5;
  const yPos = e.clientY / window.innerHeight - 0.5;

  gsap.to("#bg-sky", {
    duration: 1.5,
    x: xPos * 30,
    y: yPos * 30,
    rotationY: xPos * 5,
    ease: "power2.out",
  });

  gsap.to("#bear", {
    duration: 1.5,
    x: xPos * 50,
    y: yPos * 50,
    rotationY: xPos * 10,
    rotationX: -yPos * 10,
    ease: "power2.out",
  });

  gsap.to("#leaf-container", {
    duration: 1.5,
    x: xPos * 80,
    rotationY: xPos * 20,
    rotationX: -yPos * 20,
    ease: "power2.out",
  });

  gsap.to("#top-leaf-container", {
    duration: 1.5,
    x: xPos * 120,
    y: yPos * 50,
    rotationY: xPos * 35,
    rotationX: -yPos * 35,
    ease: "power2.out",
  });
});
