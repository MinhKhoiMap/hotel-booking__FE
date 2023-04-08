import React from "react";
import "./HomePage.css";
import HomeNav from "../../components/HomeNav/HomeNav";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeHotHotel from "../../components/HomeHotHotel/HomeHotHotel";
import HomeSpacesFavorite from "../../components/HomeSpacesFavorite/HomeSpacesFavorite";
import HomeReview from "../../components/HomeReview/HomeReview";
import HomeReadyFind from "../../components/HomeReadyFind/HomeReadyFind";
import PageFooter from "../../components/PageFooter/PageFooter";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage__nav">
        <HomeNav />
        <HomeBanner />
      </div>
      <div className="homepage__hot-hotel">
        <HomeHotHotel />
      </div>
      <div className="homepage__spaces-favorite">
        <HomeSpacesFavorite />
      </div>
      <div className="homepage__review">
        <HomeReview />
      </div>
      <footer className="homepage__footer">
        <div className="homepage__footer-header">
          <HomeReadyFind />
        </div>
        <div className="homepage__footer-main">
          <PageFooter />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
