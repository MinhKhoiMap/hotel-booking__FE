import React from "react";
import "./SearchTopBar.css";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const SearchTopBar = () => {
  return (
    <div className="search-top__container">
      <div className="search-top__search-input">
        <input type="text" placeholder="Tìm kiếm ở đây" />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
      </div>
      <div className="search-top__date-picker-range">
        <RangePicker
          className="date-picker-range"
          allowClear
          placeholder={["Ngày đi", "Ngày về"]}
          bordered={false}
          format={"DD-MM-YYYY"}
        />
      </div>
      <button className="search-btn btn">Tìm</button>
    </div>
  );
};

export default SearchTopBar;
