import React, { useEffect, useState } from "react";
import "./Booking.css";
import "../../components/SearchTile/SearchTile.css";
import { useLocation, useNavigate } from "react-router";
import { connect } from "react-redux";
import DiscoveryNav from "../../components/DiscoveryNav/DiscoveryNav";
import PageFooter from "../../components/PageFooter/PageFooter";
import SuccessModal from "../../components/SuccessModal/SuccessModal";

import roomService from "../../services/room.service";
import bookingService from "../../services/booking.service";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = (props) => {
  // console.log(props.user, "vloz");
  const navigate = useNavigate();

  const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  };

  const url = useLocation();
  const search = String(url.search);
  const roomsID = search.slice(search.search("=") + 1, search.length);
  const [rooms, setRooms] = useState([]);
  const [bookingBtnDisabled, setBookingBtnDisabled] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // console.log(rooms, "Booking");

  const booking = {
    numberOfDate: props.booking?.dates
      ? get_day_of_time(props.booking.dates[0], props.booking.dates[1])
      : 0,
  };

  const [in4_name, setIn4_name] = useState("");
  const [in4_email, setIn4_email] = useState("");
  const [in4_phoneNumber, setIn4_phoneNumber] = useState("");
  const [in4_address, setIn4_address] = useState("");

  const handleChangeName = (e) => {
    setIn4_name(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setIn4_address(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setIn4_phoneNumber(e.target.value);
  };

  const handleChangeEmail = (e) => {
    // console.log([e.target], "email");
    setIn4_email(e.target.value);
  };

  const star = () => {
    let starArr = [];
    for (let i = 0; i < Math.floor(rooms.star); i++) {
      starArr.push(<i className="fa-solid fa-star" key={i}></i>);
    }
    if (rooms.star - Math.floor(rooms.star) > 0)
      starArr.push(
        <i
          className="fa-regular fa-star-half-stroke"
          key={Math.floor(rooms.star) + 1}
        ></i>
      );
    return starArr;
  };

  const handleBookingSubmit = () => {
    const bookingForm = new FormData();
    if (
      in4_name &&
      in4_email &&
      in4_phoneNumber &&
      in4_address &&
      props.booking.dates &&
      props.booking.adults &&
      props.booking.roomsNumber
    ) {
      bookingForm.append("name", in4_name);
      bookingForm.append("email", in4_email);
      bookingForm.append("phoneNumber", in4_phoneNumber);
      bookingForm.append("address", in4_address);
      bookingForm.append("IDRoom", rooms._id[0]);
      bookingForm.append("checkIn", props.booking.dates[0]);
      bookingForm.append("checkOut", props.booking.dates[1]);
      bookingForm.append("adults", props.booking.adults);
      bookingForm.append("childs", props.booking.childs);
      bookingForm.append("roomsNumber", props.booking.roomsNumber);
      bookingForm.append(
        "totalMoney",
        Math.round(rooms.price * booking.numberOfDate * (1 + 0.1 + 0.05))
      );
      bookingForm.append("status", "pending");

      bookingService
        .createBooking(bookingForm)
        .then(() => {
          setShowSuccessModal(true);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Bạn chưa nhập thông tin đầy đủ");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Đặt phòng | " + rooms.name;
  }, [rooms.name]);

  useEffect(() => {
    roomService.getRoomByID(roomsID).then((room) => setRooms(room.data[0]));
    if (props.user) {
      setIn4_name(props.user.name);
      setIn4_email(props.user.email);
      setIn4_phoneNumber(props.user.phoneNumber);
    }
  }, [props.user, roomsID]);

  useEffect(() => {
    if (props.user) {
      setIn4_name(props.user.name);
      setIn4_email(props.user.email);
      setIn4_phoneNumber(props.user.phoneNumber);
    }
  }, [props.user]);

  useEffect(() => {
    if (
      !(
        in4_name &&
        in4_email &&
        in4_email.search("@gmail.com") >= 0 &&
        in4_phoneNumber &&
        Number(in4_phoneNumber) &&
        in4_phoneNumber.length === 10 &&
        in4_address &&
        props.booking.dates &&
        props.booking.adults &&
        props.booking.roomsNumber
      )
    ) {
      setBookingBtnDisabled(true);
    } else {
      setBookingBtnDisabled(false);
    }
  }, [
    in4_name,
    in4_email,
    in4_phoneNumber,
    in4_address,
    props.booking.dates,
    props.booking.adults,
    props.booking.roomsNumber,
  ]);

  return (
    <div className="booking-page__container">
      <div className="nav">
        <DiscoveryNav />
      </div>
      <ToastContainer
        position="top-right"
        autoClose="3000"
        newestOnTop={true}
        transition={Bounce}
        limit={3}
        className="toast-container"
      />
      <div className="booking-page__main-body">
        <div className="booking-page__book-progress">
          <div className="booking-page__welcome">
            <div className="icon">
              <i className="fa-regular fa-circle-user"></i>
            </div>
            Xin chào {props.user && props.user.name}!
            {props.user && (
              <>
                (không phải là {props.user.name}?
                <button className="log-out-btn btn">Thoát</button>)
              </>
            )}
          </div>
          <div className="booking-page__info-confirm">
            <h2 className="booking-page__info-label">
              <i className="fa-solid fa-check"></i>
              Thông tin liên lạc
            </h2>
            <div className="booking-page__info-profile">
              <div className="info-group">
                <label htmlFor="#in4-name">Họ và Tên</label>
                <input
                  type="text"
                  id="in4-name"
                  placeholder="Nhập họ và tên"
                  value={in4_name}
                  onChange={handleChangeName}
                />
              </div>
              <div className="info-group">
                <label htmlFor="#in4-address">Địa chỉ</label>
                <input
                  type="text"
                  id="in4-address"
                  placeholder="Nhập địa chỉ"
                  value={in4_address}
                  onChange={handleChangeAddress}
                />
              </div>
              <div className="info-group">
                <label htmlFor="#in4-phoneNumber">Số điện thoại</label>
                <input
                  type="text"
                  id="in4-phoneNumber"
                  placeholder="Nhập số điện thoại"
                  value={in4_phoneNumber}
                  onChange={handleChangePhoneNumber}
                  pattern="[0-9]+"
                />
              </div>
              <div className="info-group">
                <label htmlFor="#in4-email">Email</label>
                <input
                  type="email"
                  id="in4-email"
                  placeholder="Nhập email"
                  value={in4_email}
                  onChange={handleChangeEmail}
                />
              </div>
            </div>
          </div>
          <div className="booking-page__line-separate"></div>
          <div className="booking-page__order-step">
            <div className="booking-page__policy">
              Thực hiện <i>Đặt phòng</i> đồng nghĩa với việc bạn chấp nhận tuân
              theo{" "}
              <a href="https://www.facebook.com/khoimapp/">
                Điều khoản sử dụng
              </a>{" "}
              và{" "}
              <a href="https://www.facebook.com/khoimapp/">
                Chính sách bảo mật
              </a>{" "}
              của Hotel Booking.
            </div>
            <button
              className="booking-page__book-btn btn"
              onClick={handleBookingSubmit}
              disabled={bookingBtnDisabled}
            >
              Đặt phòng
            </button>
          </div>
        </div>

        <div className="booking-page__room-info">
          <div className="booking-page__room-header">
            <span>
              HOT <i className="fa-solid fa-fire-flame-curved"></i>
            </span>
            <div className="content">
              <h3 className="booking-page__room-name">{rooms.name}</h3>
              <div className="booking-page__star">{star()}</div>
              <p className="booking-page__address">{rooms.address}</p>
            </div>
          </div>
          <div className="booking-page__room-order">
            <div className="booking-page__room-order-header">
              <h2 className="booking-page__room-order-label">
                Thông tin đặt phòng
              </h2>
              <h4 className="booking-page__room-date">
                {props.booking.dates && (
                  <>
                    {props.booking.dates[0].toLocaleDateString()}{" "}
                    <i className="fa-solid fa-minus"></i>
                    {props.booking.dates[1].toLocaleDateString()}
                  </>
                )}
              </h4>
              <p className="booking-page__room-number">
                {props.booking.roomsNumber ? props.booking.roomsNumber : 0} x
                Phòng
              </p>
            </div>
            <div className="booking-page__room-order-body">
              <div
                className="booking-page__room-order-img"
                style={{
                  backgroundImage: `url(${
                    rooms.thumbnails && rooms.thumbnails[0]
                  })`,
                }}
              ></div>
              <div className="booking-page__room-order-info">
                <div className="people-number">
                  <i className="fa-solid fa-people-group"></i>
                  <span>{props.booking?.adults}</span> người lớn
                </div>
                <div className="people-number">
                  <i className="fa-solid fa-children"></i>
                  <span>{props.booking?.childs}</span> trẻ em
                </div>
                <ul className="booking-page__room-order-service">
                  <li>
                    <i className="fa-solid fa-check"></i> Nhận phòng nhanh
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> WiFi miễn phí
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.facebook.com/khoimapp/"
              className="booking-page__cancel-room-policy"
            >
              Chính sách hủy phòng
            </a>
          </div>
          <div className="booking-page__bill">
            <div className="booking-page__bill-details">
              <div className="booking-page__bill-details-item">
                <div className="label">
                  Giá phòng (
                  {props.booking.roomsNumber ? props.booking.roomsNumber : 0}{" "}
                  phòng x {booking.numberOfDate} đêm)
                </div>
                <div className="price-calcu">
                  {rooms.price * booking.numberOfDate}
                  <i className="fa-solid fa-dong-sign"></i>
                </div>
              </div>
              <div className="booking-page__bill-details-item">
                <div className="label">Phí đặt trước</div>
                <div className="price-calcu">
                  0<i className="fa-solid fa-dong-sign"></i>
                </div>
              </div>
            </div>
            <div className="booking-page__bill-final">
              <div className="price-final">
                <h2 className="label">Thành tiền</h2>
                <div className="price-calcu">
                  {Math.round(
                    rooms.price * booking.numberOfDate * (1 + 0.1 + 0.05)
                  )}
                  <i className="fa-solid fa-dong-sign"></i>
                </div>
              </div>
              <p className="explain">
                Đã bao gồm: Thuế <b>10%</b>, Phí dịch vụ <b>5%</b>
              </p>
              <div className="notice">
                <b>Chúng tôi khớp giá</b>. Tìm được giá nào thấp hơn thì chúng
                tôi sẽ khớp giá đó!
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
      {showSuccessModal && (
        <SuccessModal
          message={"Đặt phòng thành công!"}
          handleDoneBtn={() => {
            navigate("/");
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user[0],
    booking: state.booking,
  };
};

export default connect(mapStateToProps)(Booking);
