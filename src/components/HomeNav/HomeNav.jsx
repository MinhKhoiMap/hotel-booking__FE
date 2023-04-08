import React from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";
import HotelBookingLogo from "../HotelBookingLogo/HotelBookingLogo";

const HomeNav = () => {
  return (
    <div className="home-nav__wrapper">
      <div className="home-nav__logo">
        <HotelBookingLogo />
      </div>
      <nav className="home-nav__navigation">
        <div className="home-nav__navigate">
          <Link to="/">
            <div className="home-nav__navigate-discovery">Khám phá</div>
          </Link>
        </div>
        <div className="home-nav__register-login-group">
          <button className="home-nav__register-btn btn">Đăng ký</button>
          <Link to="/accounts/login">
            <button className="home-nav__login-btn btn">Đăng nhập</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HomeNav;
