import React from "react";
import { Link } from "react-router-dom";
import "./SpacesFavoriteItem.css";

const SpacesFavoriteItem = ({ space, main = false }) => {
  return (
    <div className={`spaces-favorite__item ${!main && "sub"}`}>
      <div
        className="spaces-favorite__thumbnail"
        style={{ backgroundImage: `url(${space.img})` }}
      ></div>
      <div className="spaces-favorite__main-section">
        <div className="left-section">
          <h3 className="spaces-favorite__label">{space.field}</h3>
          <p className="spaces-favorite__desc">{space.desc}</p>
        </div>
        <div className="right-section">
          <Link to={space.link}>
            <button className="visit-btn btn">Tìm hiểu ngay</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpacesFavoriteItem;
