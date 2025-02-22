import { useState, useEffect } from "react";

function ColorChanger() {
  const [colorValue, setColorValue] = useState(() => {
    const savedValue = localStorage.getItem("hueValue");
    return savedValue ? parseInt(savedValue, 10) : 0;
  });

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 640
  );
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.filter = `hue-rotate(${colorValue}deg)`;

    localStorage.setItem("hueValue", colorValue);

    return () => {
      document.body.style.filter = "";
    };
  }, [colorValue]);

  const cycleColor = () => {
    setColorValue((prevValue) => (prevValue + 45) % 360);
  };

  return (
    <div className="color-slider-wrapper">
      <div
        onClick={cycleColor}
        className="color-button"
        style={{
          visibility: isSmallScreen
            ? isButtonVisible
              ? "visible"
              : "hidden"
            : "visible",
          cursor: "pointer",
        }}
      >
        Change Color
      </div>
      {isSmallScreen && (
        <div
          className="color-change-opener"
          onClick={() => setIsButtonVisible((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          ⚙️
        </div>
      )}
    </div>
  );
}

export default ColorChanger;
