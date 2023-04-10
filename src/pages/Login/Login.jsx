import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/images/Icon/google.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { getUserByEmail, getUserByPhoneNumber } from "../../redux/actions/user";

const Login = (props) => {
  const navigate = useNavigate();

  const [isFormEmail, setIsFormEmail] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [email, SetEmail] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [password, SetPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", password);
    if (isFormEmail) {
      formData.append("email", email);
      props
        .getUserByEmail(formData)
        .then((res) => {
          console.log(res, "fff");
          if (res?.data?.userToken) {
            localStorage.setItem("userToken", res.data.userToken);
            navigate(-1);
          } else throw res;
        })
        .catch((err) => {
          console.log(err, "lnnnfffffn");

          toast.error(err.response.data.message);
        });
    } else {
      formData.append("phoneNumber", phoneNumber);
      props
        .getUserByPhoneNumber(formData)
        .then((res) => {
          console.log(res, "lnnnn");
          if (res?.data?.userToken) {
            navigate("/");
          } else throw res;
        })
        .catch((err) => {
          console.log(err, "fffffn");
          toast.error(err.response.data.message);
        });
    }
    for (var key of formData.keys()) {
      console.log(key, formData.get(key));
    }
  };

  useEffect(() => {
    document.title = "Đăng Nhập";
  }, []);

  return (
    <div className="login-page__modal form">
      <ToastContainer
        position="top-right"
        autoClose="3000"
        newestOnTop={true}
        transition={Bounce}
        limit={3}
        className="toast-container"
      />
      <form className="login-page__form">
        <div className="login-page__form-header">
          <h3 className="login-page__label">Đăng nhập</h3>
          <p className="login-page__note">
            Để đảm bảo an toàn, vui lòng đăng nhập để truy cập vào thông tin
          </p>
        </div>
        <div className="login-page__options-bar">
          <div
            className="login-page__option-label"
            style={{
              color: isFormEmail && "var(--text-color-blue)",
              borderBottom: isFormEmail && "2px solid var(--text-color-blue)",
            }}
            onClick={() => setIsFormEmail(true)}
          >
            email
          </div>
          <div
            className="login-page__option-label"
            style={{
              color: !isFormEmail && "var(--text-color-blue)",
              borderBottom: !isFormEmail && "2px solid var(--text-color-blue)",
            }}
            onClick={() => setIsFormEmail(false)}
          >
            di động
          </div>
        </div>
        <div className="login-page__type-infos-group">
          <div className="login-page__field-info">
            {isFormEmail ? (
              <>
                <label htmlFor="username">email</label>
                <input
                  type="email"
                  id="username"
                  placeholder="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </>
            ) : (
              <>
                <label htmlFor="username">số di động</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Số di động"
                  value={phoneNumber}
                  onChange={(e) => SetPhoneNumber(e.target.value)}
                />
              </>
            )}
          </div>
          <div className="login-page__field-info">
            <label htmlFor="password">Mật khẩu</label>
            <div className="password-input__group">
              <input
                type={isShowPassword ? "text" : "password"}
                id="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
              <div
                className="show-password__btn btn"
                onMouseDown={() => setIsShowPassword(true)}
                onMouseUp={() => setIsShowPassword(false)}
              >
                <i className="fa-regular fa-eye-slash"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="login-page__login-btn-wrapper">
          <button className="login-btn btn" onClick={handleSubmitLogin}>
            Đăng nhập
          </button>
        </div>
      </form>
      <div className="login-page__more-helps">
        <div className="sign-up-navigate">
          <Link to="/accounts/sign-up">Tạo tài khoản</Link>
        </div>
        <div className="forget-password">
          <Link to="">
            <i className="fa-solid fa-unlock"></i>
            Quên mật khẩu
          </Link>
        </div>
      </div>
      <div className="login-page__others-type-seperate-line">
        <div className="line"></div>
        <span>hoặc đăng nhập bằng</span>
        <div className="line"></div>
      </div>
      <div className="login-page__others-options-groups">
        <Link>
          <a
            href="http://localhost:3002/api/auth/google"
            className="google-type btn"
          >
            <img src={google} alt="Google" />
            Google
          </a>
        </Link>
      </div>
      <div className="login-page__policy-note">
        Khi đăng nhập, tôi đồng ý với các <Link>Điều khoản sử dụng</Link> và{" "}
        <Link>Chính sách bảo mật</Link> của Hotel Booking
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  getUserByEmail,
  getUserByPhoneNumber,
})(Login);
