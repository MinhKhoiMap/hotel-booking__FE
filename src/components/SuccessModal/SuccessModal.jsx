import React from "react";
import "./SuccessModal.css";

import successfulBooking from "../../assets/images/Icon/successfulBooking.png";

const SuccessModal = ({ message, handleDoneBtn }) => {
  return (
    <div className="success-modal__container">
      <div className="success-modal__main">
        <div
          className="success-modal__icon"
          style={{ backgroundImage: `url(${successfulBooking})` }}
        ></div>
        <div className="success-modal__text">{message}</div>
        <button className="done-btn btn" onClick={handleDoneBtn}>OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
