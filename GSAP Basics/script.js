gsap.from("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
});
gsap.from("h1", {
  y: 50,
  duration: 1,
  opacity: 0,
  delay: 1,
  stagger: 0.5,
});

var til = gsap.timeline();

gsap.to("#circle", {
  x: 1200,
  borderRadius: "10px",
  duration: 2.5,
  delay: 1,
  rotate: 360,
  backgroundColor: "red",
  repeat: -1,
  yoyo: true,
});
til.to("#box1", {
  x: 1400,
  duration: 2.5,
  delay: 1.5,
});
til.to("#box2", {
  x: 1400,
  rotate: 360,
  duration: 2.5,
});
til.to("#box3", {
  x: 800,
  rotate: -360,
  duration: 2,
});
