import React from 'react'
import "./Header.scss"
import imgCarousel from "../../assets/img/banner-2.jpg"
import imgCarousel1 from "../../assets/img/carousel-3.jpg"
import imgCarousel2 from "../../assets/img/theNun.jpg"
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className="mtw_banner_top" >
      <div>
        <div className="header-dark">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <img style={{ width: "6%" }} src="./img/cinema.png" alt="" />
              <a className="navbar-brand" href="#">MOVIE CINEMA</a>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navcol-1">
                <ul className="nav navbar-nav">
                  <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/">TRANG CHỦ</NavLink></li>
                  <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/movie-list">PHIM ĐANG CHIẾU</NavLink></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">DROPDOWN</a>
                    <div className="dropdown-menu" role="menu">
                      <a className="dropdown-item" role="presentation" href="#">First Item</a>
                      <a className="dropdown-item" role="presentation" href="#">Second Item</a>
                      <a className="dropdown-item" role="presentation" href="#">Third Item</a>
                    </div>
                  </li>
                </ul>
                <div className="button-group-header">
                  <button className="button_default btn_details mr-2">ĐĂNG KÍ</button>
                  <button className="button_default btn_ticket ">ĐĂNG NHẬP</button>
                </div>
              </div>
            </div>
          </nav>
          <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imgCarousel2} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imgCarousel1} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imgCarousel} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
