import React from "react";
import { Link } from "react-router-dom";
import "./RoomsCard.css";

const RoomsCard = ({ room }) => {
  return (
    <Link to={`rooms/${room._id ? room._id : ""}`}>
      <div className="rooms-card__wrapper">
        <div className="rooms-card__thumbnails">
          <img src={room.thumbnails[0]} alt={room.name} />
        </div>
        <div className="rooms-card__infos-group">
          <div className="rooms-card__header">
            <h4 className="rooms-card__name-label">{room.name}</h4>
            <span className="rooms-card__rank-star">
              <i className="fa-solid fa-star fa-flip"></i>
              {room.rank}
            </span>
          </div>
          <p className="rooms-card__place">{room.address}</p>
          <h3 className="rooms-card__price">
            <p>Giá mỗi đêm:</p>
            <span>VND</span> {room.price}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RoomsCard;
