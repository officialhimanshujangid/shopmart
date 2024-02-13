/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
const Div = styled.div``;
const Img = styled.img`
  width: 33vw;
  height: 67vh;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 5px 5px 5px rgba(7, 7, 7, 0.5);
`;

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const leng = images.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leng); // Assuming the array length is 4

      // Additional code or cleanup logic if needed
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <Div>
      <Img src={images[currentIndex]} alt="1o" />
    </Div>
  );
}

export default ImageSlider;
