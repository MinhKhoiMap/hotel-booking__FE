import React, { useEffect, useState } from "react";
import "./Discovery.css";
import DiscoveryNav from "../../components/DiscoveryNav/DiscoveryNav";
import SearchTile from "../../components/SearchTile/SearchTile";
import RoomsList from "../../components/RoomsList/RoomsList";
import PageFooter from "../../components/PageFooter/PageFooter";

import roomService from "../../services/room.service";

const Discovery = () => {
  const [roomsArr, setRoomsArr] = useState([]);

  useEffect(() => {
    roomService.getAllRooms().then((response) => setRoomsArr(response.data));
  }, [roomsArr.length]);

  useEffect(() => {
    document.title = "Hotel Booking";
  }, []);

  return (
    <div className="discovery-page__container">
      <div className="discovery-page__nav-bar">
        <DiscoveryNav />
      </div>
      <div className="discovery-page__main-body">
        <div className="discovery-page__search-container">
          <SearchTile />
        </div>
        <div className="discovery-page__recommend-rooms-list">
          <h2 className="discovery-page__recommend-rooms-label">
            Những chỗ nghỉ khuyến nghị cho bạn:
          </h2>
          <RoomsList roomsList={roomsArr} />

          <button className="discovery-page__more-rooms-btn btn">
            Xem thêm các chỗ nghỉ khác
          </button>
        </div>
      </div>
      <div className="discovery-page__footer">
        <PageFooter />
      </div>
    </div>
  );
};

export default Discovery;
