// ScrollToTopButton.js
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa"; // Icon for the button (optional)
import './Button.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond a certain point
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <FaChevronUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
