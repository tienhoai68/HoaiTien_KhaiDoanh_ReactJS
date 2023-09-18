import React from 'react'
import "./Header.scss"
import IntroHeader from './components/IntroHeader'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className="mtw_banner_top" >
      <div className="mtw_banner_top_content container">
        <a href="https://advserver.cgv.vn/www/delivery/ck.php?oaparams=2__bannerid=71__zoneid=2__cb=19d2e0e33e__oadest=https%3A%2F%2Fwww.cgv.vn%2Fdefault%2Fnewsoffer%2Fcgv-zalo-092023%2F" target="_blank" >
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
      
      {/* ----------Start-Navbar--------  */}
      <IntroHeader />
      {/* ----------End-Navbar--------  */}
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light container" id="ftco-navbar">
        <div className="container nav-wrapper">
          <a className="navbar-brand" href="index.html">
            <img style={{height: 45}} src="./img/cinema.png" alt="" />
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
    // <header className="header_area">
    //   <div className="sub_header">
    //     <div className="container">
    //       <div className="row align-items-center">
    //         <div className="col-md-4 col-xl-6">
    //           <div id="logo">
    //             <a href="index.html"><img src="img/Logo.png" alt title /></a>
    //           </div>
    //         </div>
    //         <div className="col-md-8 col-xl-6">
    //           <div className="sub_header_social_icon float-right">
    //             <a href="#"><i className="flaticon-phone" />+02 213 - 256 (365)</a>
    //             <a href="#" className="register_icon"><i className="ti-arrow-right" />REGISTER</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="main_menu">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-12">
    //           <nav className="navbar navbar-expand-lg navbar-light">
    //             <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //               <span className="navbar-toggler-icon" />
    //             </button>
    //             <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{}}>
    //               <ul className="navbar-nav mr-auto">
    //                 <li className="nav-item active">
    //                   <a className="nav-link active" href="index.html">Home</a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a href="about.html" className="nav-link">About us</a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a href="team.html" className="nav-link">team</a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a href="gallery.html" className="nav-link">gallery</a>
    //                 </li>
    //                 <li className="nav-item dropdown show">
    //                   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    //                     Pages
    //                   </a>
    //                   <div className="dropdown-menu show" aria-labelledby="navbarDropdown">
    //                     <a className="dropdown-item" href="elements.html">Elements</a>
    //                     <a className="dropdown-item" href="single-blog.html">Single blog</a>
    //                   </div>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a href="blog.html" className="nav-link">blog</a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a href="contact.html" className="nav-link">Contact</a>
    //                 </li>
    //               </ul>
    //               <div className="header_social_icon d-none d-lg-block">
    //                 <ul>
    //                   <li><a href="#"><i className="ti-facebook" /></a></li>
    //                   <li>
    //                     <a href="#"> <i className="ti-twitter" /></a>
    //                   </li>
    //                   <li><a href="#"><i className="ti-instagram" /></a></li>
    //                   <li><a href="#"><i className="ti-skype" /></a></li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </nav>
    //           <div className="header_social_icon d-block d-lg-none">
    //             <ul>
    //               <li><a href="#"><i className="ti-facebook" /></a></li>
    //               <li>
    //                 <a href="#"> <i className="ti-twitter" /></a>
    //               </li>
    //               <li><a href="#"><i className="ti-instagram" /></a></li>
    //               <li><a href="#"><i className="ti-skype" /></a></li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>

  )
}
