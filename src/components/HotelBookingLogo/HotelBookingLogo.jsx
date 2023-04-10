import React from "react";
import "./HotelBookingLogo.css";
import lastLeftLayoutLogo from "../../assets/images/Icon/lastLeftLayoutLogo.png";
import lastRightLayoutLogo from "../../assets/images/Icon/lastRightLayoutLogo.png";
import midRightLayoutLogo from "../../assets/images/Icon/midRightLayoutLogo.png";
import firstLayoutLogo from "../../assets/images/Icon/firstLayoutLogo.png";

const HotelBookingLogo = () => {
  return (
    <div className="hotel-booking-logo__container">
      <div className="left">
        <img src={lastLeftLayoutLogo} alt="" />
      </div>
      <div className="right">
        <img src={lastRightLayoutLogo} className="last-layout" alt="" />
        <img src={midRightLayoutLogo} className="mid-layout" alt="" />
      </div>
      <div className="main">
        <img src={firstLayoutLogo} alt="" />
      </div>
    </div>
  );
};

export default HotelBookingLogo;
