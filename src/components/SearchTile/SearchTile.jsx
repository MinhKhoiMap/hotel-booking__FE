import React, { useState } from "react";
import "./SearchTile.css";
import { DatePicker } from "antd";
import beach from "../../assets/images/discovery-bg-search.png";

const { RangePicker } = DatePicker;

const SearchTile = () => {
  const [showSettingList, setShowSettingList] = useState(false);

  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [beds, setBeds] = useState(1);
  // const [datesCome, setDatesCome] = useState();
  // const [datesLeave, setDatesLeave] = useState();

  return (
    <div className="search-tile__container">
      <div
        className="search-tile__bg"
        style={{ backgroundImage: `url(${beach})` }}
      ></div>
      <div className="search-tile__main-part">
        <div className="welcom-message__wrapper">
          <h1 className="welcom-message__title">
            KHÁCH SẠN, KHU NGHỈ DƯỠNG, NHÀ TRỌ & HƠN THẾ NỮA
          </h1>
          <h2 className="welcom-message__text">
            Nhận giá tốt nhất cho {">"}2.000.000 chỗ nghỉ, trên toàn cầu
          </h2>
        </div>
        <div className="search-tile__search-group">
          <ul className="search-tile__classify-bar search-tile__classify-bar--current">
            <li className="search-tile__type">
              <div className="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ fontSize: "3.2rem" }}
                >
                  <path
                    fill="#fff"
                    d="M7 2.18a1 1 0 0 1 .164.014l10 1.667a1 1 0 0 1 .836.986V11L21 11a1 1 0 0 1 1 1v10h-8v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H6V3.18a1 1 0 0 1 1-1zM5 10v12H2V11a1 1 0 0 1 1-1h2zm16 7h-3v1h3v-1zm0-3h-3v1h3v-1zm-9.5-4H9v2.5h1.01V11h1.49v-1zm4 0H13v2.5h1.01V11h1.49v-1zm-4-4H9v2.5h1.01V7h1.49V6zm4 0H13v2.5h1.01V7h1.49V6z"
                  ></path>
                </svg>
              </div>
              <div className="label-wrapper">
                <span className="label">
                  Khách sạn
                  <span className="underline"></span>
                </span>
              </div>
            </li>
          </ul>
          <div className="search-tile__search-details">
            <div className="search-tile__search-input-wrapper">
              <label className="search-tile__search-icon" htmlFor="search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
              <input
                id="search"
                type="text"
                className="search-tile__search-input"
                placeholder="Nhập điểm du lịch hoặc tên khách sạn"
              />
            </div>
            <div className="search-tile__set-detail-part">
              <div className="search-tile__date-booking">
                <RangePicker
                  className="date-picker__booking"
                  allowClear
                  placeholder={["Ngày đi", "Ngày về"]}
                  bordered={false}
                  format={"DD-MM-YYYY"}
                />
              </div>
              <div
                className="search-tile__room-detail"
                onClick={() => {
                  setShowSettingList((prev) => !prev);
                }}
              >
                <div className="search-tile__room-icon">
                  <i className="fa-solid fa-user-group"></i>
                </div>
                <div className="search-tile__room-infos">
                  <h4 className="search-tile__room-peoples">
                    {adults} người lớn {childs > 0 && `,${childs} trẻ em`}
                  </h4>
                  <p className="search-tile__room-quantity">
                    {rooms} phòng, {beds} giường
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
                            disabled={rooms === 0}
                            className="search-tile__room-volumne-btn search-tile__room-volumne-btn--down btn"
                            onClick={() =>
                              setRooms((prev) => (prev > 0 ? prev - 1 : prev))
                            }
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <div className="search-tile__room-numbers">
                            {rooms}
                          </div>
                          <button
                            className="search-tile__room-volumne-btn search-tile__room-volumne-btn--up btn"
                            onClick={() =>
                              setRooms((prev) => (prev < 9 ? prev + 1 : prev))
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
                              setAdults((prev) =>
                                prev < 100 ? prev + 1 : prev
                              )
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
                          <div className="search-tile__room-numbers">
                            {childs}
                          </div>
                          <button
                            disabled={childs / 100 >= 1}
                            className="search-tile__room-volumne-btn search-tile__room-volumne-btn--up btn"
                            onClick={() =>
                              setChilds((prev) =>
                                prev < 100 ? prev + 1 : prev
                              )
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
                          <div className="search-tile__room-numbers">
                            {beds}
                          </div>
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
                <div className="icon-list">
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="search-tile__search-btn-group">
            <button className="search-tile__search-btn btn">Tìm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTile;
