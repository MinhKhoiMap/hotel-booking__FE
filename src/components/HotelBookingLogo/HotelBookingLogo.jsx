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
        <img src={lastLeftLayoutLogo} />
      </div>
      <div className="right">
        <img src={lastRightLayoutLogo} className="last-layout" />
        <img src={midRightLayoutLogo} className="mid-layout" />
      </div>
      <div className="main">
        <img src={firstLayoutLogo} />
      </div>
    </div>
  );
};

export default HotelBookingLogo;
