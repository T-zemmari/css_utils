import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ButtonScrollToTop.css";

const ButtonScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "show_button" : "hide_button"}`}
      onClick={scrollToTop}
    >
      <FaArrowUp style={{ color: "white" }} />
    </button>
  );
};

export default ButtonScrollToTop;
