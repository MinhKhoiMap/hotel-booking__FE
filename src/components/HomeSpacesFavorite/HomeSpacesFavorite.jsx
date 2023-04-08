import React from "react";
import "./HomeSpacesFavorite.css";
import SpacesFavoriteItem from "../SpacesFavoriteItem/SpacesFavoriteItem";
import Restaurant from "../../assets/images/SpacesFavorite/Restaurant.png";
import GymCenter from "../../assets/images/SpacesFavorite/GymCenter.png";
import Pool from "../../assets/images/SpacesFavorite/SwimmingPool.png";

const HomeSpacesFavorite = () => {
  return (
    <div className="spaces-favorite__wrapper">
      <div className="left-section">
        <h2 className="spaces-favorite__title">
          các không gian được yêu thích
        </h2>
        <SpacesFavoriteItem
          space={{
            field: "Restaurant",
            img: Restaurant,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
          }}
          main={true}
        />
      </div>
      <div className="right-section">
        <SpacesFavoriteItem
          space={{
            field: "Gym Center",
            img: GymCenter,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
          }}
        />
        <SpacesFavoriteItem
          space={{
            field: "Swimming Pool",
            img: Pool,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
          }}
        />
      </div>
    </div>
  );
};

export default HomeSpacesFavorite;
