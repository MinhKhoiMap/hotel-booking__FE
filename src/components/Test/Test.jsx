import React, { useEffect, useRef, useState } from "react";
import anh1 from "../../assets/images/1.jpg";
import anh2 from "../../assets/images/2.jpg";
// import "./Test.css";

const Test = () => {
  const pic = [anh1, anh2, anh1, anh2, anh1, anh2];
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    startIndex + pic.length >= 3 ? 3 : pic.length
  );
  const slide = pic.slice(startIndex, endIndex);
  const nextRef = useRef();
  const previousRef = useRef();

  useEffect(() => {
    console.log(endIndex, startIndex, "o day a");
    endIndex === pic.length
      ? (nextRef.current.disabled = true)
      : (nextRef.current.disabled = false);
    startIndex === 0
      ? (previousRef.current.disabled = true)
      : (previousRef.current.disabled = false);
  }, [endIndex, startIndex]);

  const handleNextSlide = () => {
    setEndIndex((prev) => {
      if (!(prev === pic.length)) {
        setStartIndex((prev1) => prev1 + 1);
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePreviousSlide = () => {
    setEndIndex((prevv) => {
      if (!(prevv <= 3)) {
        setStartIndex((prevv1) => prevv1 - 1);
        return prevv - 1;
      }
      return prevv;
    });
  };

  return (
    <div className="wrapper">
      {slide.map((picItem, index) => {
        return (
          <div
            className="item"
            key={index}
            style={{
              backgroundImage: `url(${picItem})`,
            }}
          >
            {startIndex + index}
          </div>
        );
      })}
      <button
        className="previous-btn btn"
        onClick={handlePreviousSlide}
        ref={previousRef}
      >
        {"<"}
      </button>
      <button className="next-btn btn" onClick={handleNextSlide} ref={nextRef}>
        {">"}
      </button>
    </div>
  );
};

export default Test;
