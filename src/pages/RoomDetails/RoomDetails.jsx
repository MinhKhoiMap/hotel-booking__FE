import React, { useEffect, useState } from "react";
import "./RoomDetails.css";
import { useNavigate, useParams } from "react-router";
import { DatePicker } from "antd";
import ScrollToTop from "react-scroll-to-top";
// import moment from "moment";
import { connect } from "react-redux";
import DiscoveryNav from "../../components/DiscoveryNav/DiscoveryNav";
import SearchTopBar from "../../components/SearchTopBar/SearchTopBar";
import PageFooter from "../../components/PageFooter/PageFooter";

import roomService from "../../services/room.service";
import { setIn4Booking } from "../../redux/actions/booking";

import clean from "../../assets/images/Icon/clean.svg";
import medal from "../../assets/images/Icon/medal.svg";
import bagge from "../../assets/images/Icon/baggage-pay.svg";
import door from "../../assets/images/Icon/door.svg";
import bedKing from "../../assets/images/Icon/bedKing.svg";

const { RangePicker } = DatePicker;

const RoomDetails = (props) => {
  const roomsID = useParams();
  const navigate = useNavigate();
  // console.log(roomsID, "hmmm");
  const post = 211;

  const [showSettingList, setShowSettingList] = useState(false);

  const [room, setRoom] = useState({});
  const [roomsNumber, setRoomsNumber] = useState(1);
  const [beds, setBeds] = useState(1);
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [dates, setDates] = useState([]);

  // console.log(dates, "dates");
  // console.log(moment("12-12-2003", "DD-MM-YYYY"));

  const handleDateBookingPick = (values) => {
    // console.log(values, "handleDateBookingPick");
    // console.log(moment(values[0]).format("DD-MM-YYYY"), "haizz");
    setDates(values.map((date) => new Date(date)));
  };

  // console.log(dates, "hở hở");

  const handleBookingRoom = () => {
    props.setIn4Booking({ dates, adults, childs, beds, roomsNumber });
    navigate(`/booking?rooms=${roomsID["*"]}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    roomService.getRoomByID(roomsID["*"]).then((room) => {
      setRoom(room.data[0]);
      document.title = room.data[0].name;
    });
  }, [roomsID]);

  return (
    <div className="room-details-page__container">
      <ScrollToTop
        smooth={true}
        color="#fff"
        style={{
          backgroundColor: "#54cfdb",
          padding: "12px",
          width: "fit-content",
          height: "fit-content",
          borderRadius: "50%",
        }}
      />
      <div className="room-details-page__nav-bar">
        <DiscoveryNav />
      </div>
      <div className="room-details-page__search-top-bar">
        <SearchTopBar />
      </div>
      <div className="room-details-page__main-section">
        <div className="room-details-page__thumbnails-album">
          <div className="thumbnails-main">
            <figure className="thumbnail-full">
              <img src={room.thumbnails && room.thumbnails[0]} alt="" />
            </figure>
          </div>
          <div className="thumbnails-grid">
            {room.thumbnails &&
              room.thumbnails.map((image, index) => {
                if (index !== 0)
                  return (
                    <figure className="thumbnail-small" key={image}>
                      <img src={image} alt="" />
                    </figure>
                  );
                else {
                  return null;
                }
              })}
          </div>
          <button className="show-all-img-btn btn">
            <i className="fa-regular fa-images"></i>Hiển thị tất cả ảnh
          </button>
        </div>
        <div className="rooms-details-pgae__tools-bar">
          <ul className="tools-list">
            <a href="#overview">
              <li>Tổng quan</li>
            </a>
            <a href="#convenient">
              <li>Tiện nghi</li>
            </a>
            <a href="##">
              <li>Đánh giá</li>
            </a>
            <a href="##">
              <li>Chính sách</li>
            </a>
          </ul>
          <div className="price">
            từ <span>{room.price}</span>{" "}
            <i className="fa-solid fa-dong-sign"></i>
          </div>
        </div>
        <div className="room-details-page__info-details">
          <div className="main-info">
            <div id="overview">
              <div className="header">
                <div className="label">
                  <h2>{room.name}</h2>
                </div>
                <p className="place">{room.address}</p>
              </div>
              <div className="body">{room.introduce}</div>
            </div>
            <div id="highlights">
              <h3 className="label">Điểm nổi bật nhất</h3>
              <div className="spot-group">
                <div className="point">
                  <img src={clean} alt="" />
                  <p>Sạch bóng</p>
                </div>
                <div className="point">
                  <img src={medal} alt="" />
                  <p>Đáng tiền nhất</p>
                </div>
                <div className="point">
                  <img src={bagge} alt="" />
                  <p>Khách đi công tác đánh giá rất cao</p>
                </div>
                <div className="point">
                  <img src={door} alt="" />
                  <p>Nhận phòng [24 giờ]</p>
                </div>
                <div className="point">
                  <img src={bedKing} alt="" />
                  <p>Chất lượng và tiện nghi phòng tuyệt vời</p>
                </div>
              </div>
            </div>
            <div id="convenient">
              <h3 className="label">Tiện nghi và cơ sở vật chất</h3>
              <div className="convenients-group">
                {room.conveniences &&
                  room.conveniences.map((convenience) => (
                    <div className="convenience-item" key={convenience.label}>
                      <h4 className="convenience-item__label">
                        {convenience.label}
                      </h4>
                      <ul>
                        {convenience.content.map((content) => (
                          <li key={content}>{content}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="booking-part">
            <div className="booking-part__header">
              <div className="price">
                <i className="fa-solid fa-dong-sign"></i>
                {room.price}
              </div>
              <div className="rate">
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  {room.rank}
                </div>
                <div className="post">{post} đánh giá</div>
              </div>
            </div>
            <div className="date-picker-range">
              <RangePicker
                className="picker"
                allowClear
                placeholder={["Ngày đi", "Ngày về"]}
                bordered={false}
                format={"DD-MM-YYYY"}
                onChange={handleDateBookingPick}
                style={{ fontFamily: "Reem Kufi Ink" }}
              />
            </div>
            <div
              className="search-tile__room-detail"
              onClick={() => setShowSettingList((prev) => !prev)}
            >
              <h4 className="search-tile__room-peoples">
                {adults} người lớn {childs > 0 && `,${childs} trẻ em`}
              </h4>
              <p className="search-tile__room-quantity">
                {roomsNumber} phòng, {beds} giường
              </p>

              {showSettingList && (
                <div
                  className="search-tile__room-setting"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="search-tile__room">
                    <h4 className="label">Phòng</h4>
                    <div className="search-tile__room-volumne">
                      <button
                        disabled={roomsNumber === 0}
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--down btn"
                        onClick={() =>
                          setRoomsNumber((prev) => (prev > 0 ? prev - 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <div className="search-tile__room-numbers">
                        {roomsNumber}
                      </div>
                      <button
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--up btn"
                        onClick={() =>
                          setRoomsNumber((prev) => (prev < 9 ? prev + 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="search-tile__room">
                    <h4 className="label">Người lớn</h4>
                    <div className="search-tile__room-volumne">
                      <button
                        disabled={adults === 1}
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--down btn"
                        onClick={() =>
                          setAdults((prev) => (prev > 1 ? prev - 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="search-tile__room-numbers">
                        {adults}
                      </span>
                      <button
                        disabled={adults / 100 >= 1}
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--up btn"
                        onClick={() =>
                          setAdults((prev) => (prev < 100 ? prev + 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="search-tile__room">
                    <h4 className="label">Trẻ em</h4>
                    <div className="search-tile__room-volumne">
                      <button
                        disabled={childs < 1}
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--down btn"
                        onClick={() =>
                          setChilds((prev) => (prev > 0 ? prev - 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <div className="search-tile__room-numbers">{childs}</div>
                      <button
                        disabled={childs / 100 >= 1}
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--up btn"
                        onClick={() =>
                          setChilds((prev) => (prev < 100 ? prev + 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="search-tile__room">
                    <h4 className="label">Số giường</h4>
                    <div className="search-tile__room-volumne">
                      <button
                        disabled={beds === 1}
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--down btn"
                        onClick={() =>
                          setBeds((prev) => (prev > 1 ? prev - 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <div className="search-tile__room-numbers">{beds}</div>
                      <button
                        disabled={beds === 4}
                        className="search-tile__room-volumne-btn search-tile__room-volumne-btn--up btn"
                        onClick={() =>
                          setBeds((prev) => (prev < 4 ? prev + 1 : prev))
                        }
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              className="booking-part__book-btn btn"
              onClick={handleBookingRoom}
            >
              Đặt phòng
            </button>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
  };
};

export default connect(mapStateToProps, {
  setIn4Booking,
})(RoomDetails);
