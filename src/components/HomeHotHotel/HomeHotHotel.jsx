import React, { useState, useEffect, useRef } from "react";
import "./HomeHotHotel.css";
import Rectangle1 from "../../assets/images/Rectangle1.png";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import Rectangle3 from "../../assets/images/Rectangle3.png";
import HomeHotelCard from "../HomeHotelCard/HomeHotelCard";

const HomeHotHotel = () => {
  const hotelList = [
    {
      nameRoom: "LaGoerte Single Room",
      rank: 4.8,
      nameHotel: "LaGoerte Single Room1",
      utility: ["bath", "wifi", "buffet"],
      service: ["pool", "park"],
      pricePerNight: 120,
      thumbnail: Rectangle1,
    },
    {
      nameRoom: "Deluxe Double Suite",
      rank: 4.8,
      nameHotel: "LaGoerte Single Room2",
      utility: ["bath", "wifi", "buffet"],
      service: ["pool", "park"],
      pricePerNight: 120,
      thumbnail: Rectangle2,
    },
    {
      nameRoom: "LaGoerte Single Room3",
      rank: 4.8,
      nameHotel: "LaGoerte Single Room",
      utility: ["bath", "wifi", "buffet"],
      service: ["pool", "park"],
      pricePerNight: 120,
      thumbnail: Rectangle3,
    },
    {
      nameRoom: "LaGoerte Single Room4",
      rank: 4.8,
      nameHotel: "LaGoerte Single Room",
      utility: ["bath", "wifi", "buffet"],
      service: ["pool", "park"],
      pricePerNight: 120,
      thumbnail: Rectangle3,
    },
    {
      nameRoom: "LaGoerte Single Room5",
      rank: 4.8,
      nameHotel: "LaGoerte Single Room",
      utility: ["bath", "wifi", "buffet"],
      service: ["pool", "park"],
      pricePerNight: 120,
      thumbnail: Rectangle3,
    },
    {
      nameRoom: "LaGoerte Single Room6",
      rank: 4.8,
      nameHotel: "LaGoerte Single Room",
      utility: ["bath", "wifi", "buffet"],
      service: ["pool", "park"],
      pricePerNight: 120,
      thumbnail: Rectangle3,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    startIndex + hotelList.length >= 3 ? 3 : hotelList.length
  );
  const slideHotel = hotelList.slice(startIndex, endIndex);
  const nextRef = useRef();
  const previousRef = useRef();

  useEffect(() => {
    console.log(endIndex, startIndex, "o day a");
    endIndex === hotelList.length
      ? (nextRef.current.disabled = true)
      : (nextRef.current.disabled = false);
    startIndex === 0
      ? (previousRef.current.disabled = true)
      : (previousRef.current.disabled = false);
  }, [endIndex, startIndex, hotelList.length]);

  const handleNextSlide = () => {
    setEndIndex((prev) => {
      if (!(prev === hotelList.length)) {
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
    <div className="hot-hotel__wrapper">
      <h2 className="hot-hotel__title">khách sạn hot</h2>
      <div className="hot-hotel__list">
        {slideHotel.map((hotel, index) => {
          return <HomeHotelCard hotel={hotel} key={index} />;
        })}
        <div className="move-item__group-btn">
          <button
            className="previous-btn btn"
            ref={previousRef}
            onClick={handlePreviousSlide}
          >
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <button
            className="next-btn btn"
            ref={nextRef}
            onClick={handleNextSlide}
          >
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHotHotel;
