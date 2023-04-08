import React from "react";
import "./HomeHotelCard.css";
import { Link } from "react-router-dom";

const HomeHotelCard = ({ hotel }) => {
  const handleMouseOver = (e) => {
    // console.log([e.target]);
    e.target.classList.add("fa-bounce");
    e.target.classList.remove("fa-regular");
    e.target.classList.add("fa-solid");
  };

  const handleMouseOut = (e) => {
    // console.log([e.target]);
    e.target.classList.remove("fa-bounce");
    e.target.classList.add("fa-regular");
    e.target.classList.remove("fa-solid");
  };

  return (
    <Link to="">
      <div className="hot-hotel_item-wrapper">
        <div className="hot-hotel__thumbnail">
          <img src={hotel.thumbnail} alt={hotel.nameRoom} />
        </div>
        <div className="hot-hotel__header">
          <div className="hot-hotel__rank">
            <i className="fa-solid fa-star fa-flip"></i>
            <span>{hotel.rank}</span>
          </div>
          <div className="hot-hotel__price">${hotel.pricePerNight}</div>
        </div>
        <div className="hot-hotel__body">
          <div className="hot-hotel__label">
            <h3>{hotel.nameRoom}</h3>
            <p>{hotel.nameHotel}</p>
          </div>
          <div className="hot-hotel__feature-group">
            <span
              className="hot-hotel__feature-item hot-hotel__feature-item--like"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <i className="fa-regular fa-heart"></i>
            </span>
            <span className="hot-hotel__feature-item">
              <i className="fa-solid fa-utensils"></i>
            </span>
            <span className="hot-hotel__feature-item">
              <i className="fa-regular fa-gem"></i>
            </span>
            <span className="hot-hotel__feature-item">
              <i className="fa-regular fa-clock"></i>
            </span>
            <span className="hot-hotel__feature-item">
              <i className="fa-solid fa-message"></i>
            </span>
          </div>
        </div>
        <div className="hot-hotel__footer">
          <button className="booking-btn btn">Đặt ngay</button>
        </div>
      </div>
    </Link>
  );
};

export default HomeHotelCard;
