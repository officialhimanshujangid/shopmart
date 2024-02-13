/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";

import styles from "./Slider.module.css";
function Silder() {
  const images = ["/3.png", "/1.png", "/2.png", "/4.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming the array length is 4

      // Additional code or cleanup logic if needed
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className={styles.container}>
      <img src={images[currentIndex]} alt="1o" />
    </div>
  );
}

export default Silder;
//   const slides = document.querySelectorAll(".slide");
//   let activeSlide = 0;
//   function rightOperation() {
//     activeSlide++;
//     if (activeSlide > slides.length - 1) {
//       activeSlide = 0;
//     }
//     setActiveSlide();
//   }
//   function leftOperation() {
//     activeSlide--;
//     if (activeSlide < 0) {
//       activeSlide = slides.length - 1;
//     }
//     setActiveSlide();
//   }
//   function setActiveSlide() {
//     slides.forEach((slide) => slide.classList.remove("active"));
//     slides[activeSlide].classList.add("active");
//   }
