import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
/* const App = () => {
    useGSAP(() => {
    gsap.from(boxRef.current, {
      rotate: 360,
      delay: 1,
      duration: 1,
    });
  });
    useGSAP(
    () => {
      gsap.from(".box", {
        rotate: 360,
        scale: 0,
        duration: 1,
        opacity: 0,
        delay: 0.5,
      });
    },
    { scope: boxRef }
  );
  const boxRef = useRef();
  const rotate = gsap.utils.random(-360, 360, 0);
  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-500, 500, 100);

  const [xValue, setXValue] = useState(0);
  const [YValue, setYValue] = useState(0);
  const [roti, setRoti] = useState(0);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xValue,
      y: YValue,
      duration: 0.6,
      rotate: roti,
    });
  }, [xValue, YValue, roti]);

  return (
    <main>
      <img
        onClick={() => {
          setXValue(randomX);
          setYValue(randomY);
          setRoti(rotate);
        }}
        ref={boxRef}
        src="https://images.vexels.com/content/242241/preview/side-fly-geometric-color-stroke-123fa9.png"
        alt=""
      />
    </main>
  );
}; */

const App = () => {
  const boxRef = useRef();
  const { contextSafe } = useGSAP(); // Use the hook

  // Define rotateBox with contextSafe to handle animation with cleanup
  const rotateBox = contextSafe(() => {
    // Reset the rotation to 0 before starting the animation
    gsap.set(boxRef.current, { rotate: 0 });

    // Animate the rotation
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  });

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="circle">Box</div>
    </main>
  );
};

export default App;