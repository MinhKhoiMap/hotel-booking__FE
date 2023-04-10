import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../assets/images/Icon/google.png";
import { createUser } from "../../redux/actions/user";
import { connect } from "react-redux";

import LoadOverlay from "../../components/LoadOverlay/LoadOverlay";

const SignUp = (props) => {
  const navigate = useNavigate();
  // console.log(props, "Sign Up props");

  const params = useLocation();
  useEffect(() => {
    // console.log(params);
    const path = params.search;
    SetAvatarURL(
      path.slice(path.search("avatar") + "avatar=".length, path.length)
    );
    SetEmail(
      path.slice(path.search("email") + "email=".length, path.search("&"))
    );
  }, [params]);

  useEffect(() => {
    document.title = "Đăng Ký";
  }, []);

  const [showOverlay, SetShowOverlay] = useState(false);

  const [avatarURL, SetAvatarURL] = useState("");
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const handleSetPassword = (e) => {
    const password = e.target.value;
    if (password.length < 9) {
      e.target.classList.add("wrong");
    } else {
      e.target.classList.remove("wrong");
    }
    SetPassword(password);
  };

  const handleConfirmPassword = (e) => {
    const rewritePassword = e.target.value;
    if (rewritePassword !== password) {
      e.target.classList.add("wrong");
    } else {
      e.target.classList.remove("wrong");
    }
    SetConfirmPassword(rewritePassword);
  };

  const handleSetPhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    if (!Number(phoneNumber) || phoneNumber.length !== 10) {
      e.target.classList.add("wrong");
    } else {
      e.target.classList.remove("wrong");
    }
    SetPhoneNumber(phoneNumber);
  };

  const handleSubmitFormCreate = (e) => {
    const formData = new FormData();
    e.preventDefault();
    if (email && password && phoneNumber && name) {
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phoneNumber", phoneNumber);
      formData.append("name", name);
      formData.append("avatarURL", avatarURL);

      SetShowOverlay(true);
      props
        .createUser(formData)
        .then((res) => {
          // console.log(res, "res ben");
          SetShowOverlay(false);
          navigate("/");
        })
        .catch((err) => {
          // console.log(err);
          toast.warning(
            "Tài khoản này đã tồn tại! Vui lòng thực hiện đăng nhập."
          );
          SetShowOverlay(false);
          // navigate("../log-in");
        });
    } else {
      toast.error("Vui lòng điền đầy đủ phiếu đăng ký");
    }
    // console.log(formData);
    // for (var key of formData.keys()) {
    //   console.log(key, formData.get(key));
    // }
  };

  return (
    <div className="signup-page__container form">
      <ToastContainer
        position="top-right"
        autoClose="3000"
        newestOnTop={true}
        transition={Bounce}
        limit={3}
        className="toast-container"
      />
      <form className="signup-page__form">
        <div className="signup-page__form-header">
          <h3 className="signup-page__label">Đăng ký</h3>
        </div>
        <div className="signup-page__type-infos-group">
          <div className="signup-page__field-info">
            <label htmlFor="name">Họ Tên</label>
            <input
              type="text"
              id="name"
              placeholder="Họ và Tên"
              value={name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
          </div>
          <div className="signup-page__field-info">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />
          </div>
          <div className="signup-page__field-info">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="text"
              id="phone"
              placeholder="Số điện thoại"
              value={phoneNumber}
              onChange={handleSetPhoneNumber}
            />
          </div>
          <div className="signup-page__field-info">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={handleSetPassword}
            />
          </div>
          <div className="signup-page__field-info">
            <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </div>
        </div>
        <div className="signup-page__signup-btn-wrapper">
          <button className="signup-btn btn" onClick={handleSubmitFormCreate}>
            Đăng ký
          </button>
        </div>
      </form>
      <div className="signup-page__others-type-seperate-line">
        <div className="line"></div>
        <span>hoặc tiếp tục với</span>
        <div className="line"></div>
      </div>
      <div className="signup-page__others-options-groups">
        <a
          className="google-type btn"
          href="http://localhost:3002/api/auth/google"
        >
          <img src={google} alt="Google" />
          Google
        </a>
      </div>
      <Link to="/accounts/log-in">
        <button className="signup-page__login-now-btn btn">
          Bạn đã có tài khoản? Đăng nhập
        </button>
      </Link>
      <div className="signup-page__policy-note">
        Khi đăng ký, tôi đồng ý với các <Link>Điều khoản sử dụng</Link> và{" "}
        <Link>Chính sách bảo mật</Link> của Hotel Booking
      </div>
      {showOverlay && <LoadOverlay />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};
export default connect(mapStateToProps, {
  createUser,
})(SignUp);
