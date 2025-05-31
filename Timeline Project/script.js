var animation3 = lottie.loadAnimation({
  container: document.querySelector(".lottie3"), // The container where animation will appear
  renderer: "svg", // Use SVG renderer for better quality
  loop: true, // Whether the animation should loop
  autoplay: true, // Whether the animation should start automatically
  path: "./Animation - 1731229744475.json", // Path to the Lottie JSON file
});
var animation1 = lottie.loadAnimation({
  container: document.querySelector(".lottie1"), // The container where animation will appear
  renderer: "svg", // Use SVG renderer for better quality
  loop: true, // Whether the animation should loop
  autoplay: true, // Whether the animation should start automatically
  path: "./Animation - 1731231005169.json", // Path to the Lottie JSON file
});
var animation4 = lottie.loadAnimation({
  container: document.querySelector(".lottie4"), // The container where animation will appear
  renderer: "svg", // Use SVG renderer for better quality
  loop: true, // Whether the animation should loop
  autoplay: true, // Whether the animation should start automatically
  path: "./Animation - 1731231386958.json", // Path to the Lottie JSON file
});
var animation2 = lottie.loadAnimation({
  container: document.querySelector(".lottie2"), // The container where animation will appear
  renderer: "svg", // Use SVG renderer for better quality
  loop: true, // Whether the animation should loop
  autoplay: true, // Whether the animation should start automatically
  path: "./Animation - 1731232492165.json", // Path to the Lottie JSON file
});
function page1Animation() {
  var tl = gsap.timeline();
  tl.from("nav h1, nav h4,nav button", {
    y: -40,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(
    ".center-part-1 h1",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );
  tl.from(".center-part-1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part-1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part-2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.7"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anime1"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anime1"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anime2"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anime2"
  );
}

page1Animation();
page2Animation();
