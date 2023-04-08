import React from "react";
import "./NoticeMessage.css";

const NoticeMessage = ({
  label,
  message,
  setShowNoticeMessage,
  handleAcceptNotice,
  type,
}) => {
  const handleCloseNoticeMessage = () => {
    setShowNoticeMessage(false);
  };

  return (
    <div className={`notice-message__wrapper ${type}`}>
      <div className="notice-message__main slide-bottom">
        <div className="notice-message__content">
          <div className="notice-message__header">
            <h3 className="notice-message__label">{label}</h3>
            <button
              className="notice-message__close"
              onClick={handleCloseNoticeMessage}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="notice-message__text">
            <p>{message}</p>
          </div>
        </div>
        <footer className="notice-message__footer">
          <button
            className="notice-message__btn notice-message__btn--accept"
            onClick={handleAcceptNotice}
          >
            Đồng ý
          </button>
          <button
            className="notice-message__btn notice-message__btn--cancel"
            onClick={handleCloseNoticeMessage}
          >
            Hủy
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NoticeMessage;
