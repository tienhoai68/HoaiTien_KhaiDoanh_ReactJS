import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../assets/img/cinema.png";
import avatar from "../../assets/img/avatar-1.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
import { movieService } from "../../services/movie";
export default function Header() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    fetchBannerMovie();
  }, []);

  const fetchBannerMovie = async () => {
    const result = await movieService.fetchMovieBannerApi();
    setBannerMovie(result.data.content);
  };

  const renderBanner = () => {
    return bannerMovie.map((element, index) => {

      return (
        <div key={element.maPhim} className={`carousel-item  ${index === 0 && "active"
          } `}>
          <img src={element.hinhAnh} className="img-banner d-block w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      );
    });
  };

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
              <div className="dropdown-menu w-25">
                <a href="#" className="dropdown-item">
                  <i className="fa-regular fa-user"></i> Profile
                </a>
                <a href="#" className="dropdown-item">
                  <i className="fa fa-sliders"></i> Settings
                </a>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={handleLogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  Logout
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
  };

  return (
    <div className="mtw_banner_top">
      <div>
        <div className="header-dark">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <img style={{ width: "6%" }} src={logo} alt="" />
              <NavLink className="navbar-brand" href="/">
                MOVIE CINEMA
              </NavLink>
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
                    <NavLink className="nav-link" to="/">
                      DANH SÁCH PHIM
                    </NavLink>
                  </li>
                  <li className="nav-item-header" role="presentation">
                    <NavLink className="nav-link" to="/">
                     CỤM RẠP
                    </NavLink>
                  </li>
                  <li className="nav-item-header" role="presentation">
                    <NavLink className="nav-link" to="/">
                      TIN TỨC
                    </NavLink>
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
            // data-ride="carousel"
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
                {renderBanner()}
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
