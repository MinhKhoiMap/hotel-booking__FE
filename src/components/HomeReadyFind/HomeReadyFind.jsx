import React from "react";
import "./HomeReadyFind.css";
import thumbnail from "../../assets/images/Ready.jpg";
import { Link } from "react-router-dom";

const HomeReadyFind = () => {
  return (
    <div className="ready-find__wrapper">
      <div className="layout"></div>
      <div className="ready-find__main">
        <div className="ready-find__message">
          <h3 className="ready-find__message-title">
            Ready to find a hotel near you?
          </h3>
          <p className="ready-find__message-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo
            dolores vel minus cupiditate exercitationem corporis, inventore
            velit, natus, expedita rem atque fugiat. Perferendis, aperiam nemo
            expedita optio iusto sit?
          </p>
        </div>
        <Link to="">
          <button className="ready-find__btn btn">
            <span>Find a hotel</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
      <div
        className="ready-find__thumbnails"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
    </div>
  );
};

export default HomeReadyFind;
