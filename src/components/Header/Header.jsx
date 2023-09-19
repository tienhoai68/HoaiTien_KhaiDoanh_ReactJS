import React from 'react'
import "./Header.scss"
import IntroHeader from './components/IntroHeader'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className="mtw_banner_top" >
      <div className="mtw_banner_top_content container">
        <a href="" target="_blank" >
          <img className='w-100' src="./img/zalopay.jpg" alt="zalo" />
        </a>
      </div>

      <div className="header-language-background container">
        <div className="header-container">
          <div className="header-language-right">
            <div className='header-career mn-newsoffer'>
              <p><a href="">Tin mới & Ưu đãi</a></p>
            </div>
            <div className='header-career mn-myticket'>
              <p><a href="">Vé Của Tôi</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* ----------Start-IntroHeader--------  */}
      <IntroHeader />
      {/* ----------End-IntroHeader--------  */}

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light container" id="ftco-navbar">
        <div className="container nav-wrapper">
          <a className="navbar-brand" href="index.html">
            <img style={{ height: 45 }} src="./img/cinema.png" alt="" />
            Cyber Cinema</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="navbar-collapse collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><NavLink to="/" className="nav-link">Trang chủ</NavLink></li>
              <li className="nav-item"><NavLink to="/movie-list" className="nav-link">Phim Đang Chiếu</NavLink></li>
              <li className="nav-item"><a href="candidates.html" className="nav-link">Canditates</a></li>
              <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
              <li className="nav-item cta mr-md-1"><a href="new-post.html" className="nav-link">Post a Job</a></li>
              <li className="nav-item cta cta-colored"><a href="job-post.html" className="nav-link">Want a Job</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
