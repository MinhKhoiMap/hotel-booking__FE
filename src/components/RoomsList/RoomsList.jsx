import React from "react";
import "./RoomsList.css";
import RoomsCard from "../RoomsCard/RoomsCard";

const RoomsList = ({ roomsList }) => {
  // console.log(roomsList, "haizzz");

  return (
    <div className="rooms-list__container">
      {roomsList.map((room, index) => (
        <RoomsCard room={room} key={room.name + index} />
      ))}
    </div>
  );
};

export default RoomsList;
