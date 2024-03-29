import { useEffect, useState } from "react";
import "./ButtonShadow.css";

const ButtonShadow = ({ buttonText, shadowStyle, hoverStyle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentStyle, setCurrentStyle] = useState(shadowStyle);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    console.log("isHovered", isHovered);
    console.log("currentStyle", currentStyle);
    if (isHovered && hoverStyle != undefined) {
      setCurrentStyle(hoverStyle);
    } else {
      setCurrentStyle(shadowStyle);
    }
  }, [isHovered]);

  return (
    <button
      className="button-custom-class"
      style={{ boxShadow: `${currentStyle}` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
    </button>
  );
};

export default ButtonShadow;
