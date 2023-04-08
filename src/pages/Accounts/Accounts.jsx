import React, { useEffect, useState } from "react";
import "./Accounts.css";
import { Link, Outlet } from "react-router-dom";
import LogoRed from "../../assets/images/LogoRed.png";
import ReactLoading from "react-loading";

import PageFooter from "../../components/PageFooter/PageFooter";

const Accounts = () => {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <div
      className="accounts-page__container"
      onLoadCapture={() => setShowLoading(true)}
      onLoad={() => setShowLoading(false)}
    >
      {showLoading && (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#000"}
          height={"20%"}
          width={"20%"}
        />
      )}
      <div className="accounts-page__top-nav-bar">
        <Link to="/">
          <figure className="top-nav__logo-wrap">
            <img src={LogoRed} alt="logo-red" />
          </figure>
        </Link>
        <div className="top-nav__tool-group">
          <div className="top-nav__tool-menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="accounts-page__body">
        <Outlet />
      </div>
      <PageFooter />
    </div>
  );
};

export default Accounts;
