import React from "react";
import "./HomeBanner.css";
import ArrowIcon from "../../assets/images/Icon/ArrowIcon.png";
import HotelBanner from "../../assets/images/Vector.svg";
import { useNavigate } from "react-router";

const HomeBanner = () => {
  const hotelBannerSlideArr = [HotelBanner];
  const navigate = useNavigate();

  return (
    <div className="home-banner__wrapper">
      <div className="left-section">
        <h2 className="banner-text">tìm khách sạn ngay thôi!</h2>
        <form className="find-hotel__form">
          <div className="find-input__wrap">
            <input type="text" placeholder="Tìm kiếm ở đây" />
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <img src={ArrowIcon} alt="" />
          </div>
          <button
            className="find-btn btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Tìm
          </button>
        </form>
      </div>
      <div className="right-section">
        {hotelBannerSlideArr.map((banner, index) => (
          <div
            className="banner-img__slide"
            style={{ backgroundImage: `url(${banner})` }}
            key={index}
          >
            <div className="bar-top"></div>
            <div className="bar-bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
