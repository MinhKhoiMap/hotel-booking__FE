import React from "react";
import "./PageFooter.css";
import HotelBookingLogo from "../../components/HotelBookingLogo/HotelBookingLogo";

const PageFooter = () => {
  return (
    <div className="homepage__footer-container">
      <div className="homepage__footer-infos">
        <div className="homepage__footer-logo">
          <HotelBookingLogo />
        </div>
        <div className="homepage__footer-links">
          <ul className="homepage__footer-info-link">
            <h4 className="homepage__footer-info-label">Product</h4>
            <li>Home</li>
            <li>About</li>
            <li>Find Hotel</li>
            <li>Facilities</li>
          </ul>
          <ul className="homepage__footer-info-link">
            <h4 className="homepage__footer-info-label">Company</h4>
            <li>T.O.S</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
          <ul className="homepage__footer-info-link">
            <h4 className="homepage__footer-info-label">Contact Us</h4>
            <li>khoipham.31211027588@st.ueh.edu.vn</li>
            <li>0911950174</li>
            <li>TP.HCM</li>
          </ul>
        </div>
      </div>
      <div className="homepage__footer-socials">
        <a
          href="https://www.facebook.com/khoimapp"
          className="homepage__footer-social--fb"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.facebook.com/khoimapp"
          className="homepage__footer-social--instagram"
        >
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/khoimapp"
          className="homepage__footer-social--twitter"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default PageFooter;
