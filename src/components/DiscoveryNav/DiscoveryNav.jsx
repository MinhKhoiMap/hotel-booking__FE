import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./DiscoveryNav.css";
import { connect } from "react-redux";
import LogoRed from "../../assets/images/LogoRed.png";
import user_noava from "../../assets/images/Icon/user-noava.png";
import { getUser } from "../../redux/actions/user";

const DiscoveryNav = (props) => {
  const navigate = useNavigate();
  const params = useLocation();
  // console.log(params, "navigate");
  // console.log(props.user, "navigate");

  const [avatarURL, setAvatarURL] = useState("");

  useEffect(() => {
    localStorage.getItem("userToken") &&
      props
        .getUser(localStorage.getItem("userToken"))
        .then((user) => {
          setAvatarURL(user[0].avatarURL);
        })
        .catch(() => {
          localStorage.removeItem("userToken");
          window.location.reload();
        });
    // console.log("clgg");
  }, [props.user, props]);

  return (
    <div className="discovery-nav__wrapper">
      <div className="discovery-nav__navigate-group">
        <Link to="/">
          <div className="discovery-nav__logo-part">
            <figure className="top-nav__logo-wrap">
              <img src={LogoRed} alt="logo-red" />
            </figure>
          </div>
        </Link>
        <ul className="discovery-nav__tags-link-list">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/home-page">Về chúng tôi</Link>
          </li>
        </ul>
      </div>
      <div className="discovery-nav__tools-group">
        {props.user.length > 0 ? (
          <div className="discovery-nav__tool--account">
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${avatarURL ? avatarURL : user_noava})`,
              }}
            ></div>
            <i className="fa-solid fa-bars"></i>

            <ul className="discovery-nav__tool-list">
              <li>
                <Link to="">Profile</Link>
              </li>
              <li
                onClick={() => {
                  localStorage.removeItem("userToken");
                  params.pathname === "/booking"
                    ? navigate("/")
                    : window.location.reload();
                }}
                className="log-out-btn"
              >
                Log out
              </li>
            </ul>
          </div>
        ) : (
          <div className="discovery-nav__tool--account">
            <i className="fa-solid fa-circle-user"></i>
            <i className="fa-solid fa-bars"></i>

            <ul className="discovery-nav__tool-list">
              <li>
                <Link to="/accounts/log-in">Log In</Link>
              </li>
              <li>
                <Link to="/accounts/sign-up">Sign Up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getUser })(DiscoveryNav);
