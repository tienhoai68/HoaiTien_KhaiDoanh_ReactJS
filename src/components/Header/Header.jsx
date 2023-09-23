import React from "react";
import "./Header.scss";
import venice from "../../assets/img/banner-2.jpg";
import avengers from "../../assets/img/carousel-3.jpg";
import theNun from "../../assets/img/theNun.jpg";
import logo from "../../assets/img/cinema.png";
import avatar from "../../assets/img/avatar-1.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
export default function Header() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const renderButtonLogin = () => {
    if (!userState.userInfo) {
      return (
        <>
          <button
            onClick={() => navigate("/login")}
            className="button_default btn_details mr-2"
          >
            ĐĂNG KÍ
          </button>
          <button
            onClick={() => navigate("/login")}
            className="button_default btn_ticket "
          >
            ĐĂNG NHẬP
          </button>
        </>
      );
    } else {
      return (
        <>
          {/* <span>Hello {userState.userInfo.hoTen}</span> */}
          {/* <button onClick={() => navigate("/login")} className="button_default btn_details ml-2"> <i className="fa fa-sign-out"></i> ĐĂNG XUẤT</button> */}
          <div className="navbar-nav ml-auto navbar-logout">
            <div className="nav-item-logout dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="nav-link nav-img dropdown-toggle user-action"
              >
                <img src={avatar} className="avatar" alt="Avatar" />
                Hello {userState.userInfo.hoTen} <b className="caret"></b>
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                <i className="fa-regular fa-user"></i> Profile
                </a>
                <a href="#" className="dropdown-item">
                  <i className="fa fa-sliders"></i> Settings
                </a>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={handleLogout}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const handleLogout = () => {
      localStorage.removeItem("USER_INFO");
      dispatch(setUserInfoAction(null));
      navigate("/");
  }

  return (
    <div className="mtw_banner_top">
      <div>
        <div className="header-dark">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <img style={{ width: "6%" }} src={logo} alt="" />
              <a className="navbar-brand" href="#">
                MOVIE CINEMA
              </a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navcol-1"
              >
                <ul className="nav navbar-nav">
                  <li className="nav-item-header" role="presentation">
                    <NavLink className="nav-link" to="/">
                      TRANG CHỦ
                    </NavLink>
                  </li>
                  <li className="nav-item-header" role="presentation">
                    <NavLink className="nav-link" to="/movie-list">
                      PHIM ĐANG CHIẾU
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      DROPDOWN
                    </a>
                    <div className="dropdown-menu" role="menu">
                      <a className="dropdown-item" role="presentation" href="#">
                        First Item
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Second Item
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Third Item
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="button-group-header">{renderButtonLogin()}</div>
              </div>
            </div>
          </nav>
          <div className="bd-example">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={theNun} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={avengers} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={venice} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
