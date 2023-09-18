import "./navbar.scss"
import "./responsiveNavbar.scss"
import { useNavigate, NavLink } from 'react-router-dom'
export default function Navbar() {

    // return (
    //     <div className='page-header'>
    //         <div className='page-header-container container'>
    //             <nav className="navbar navbar-expand-lg navbar-light p-lg-0">
    //                 <a className="navbar-brand logo" href="#">
    //                     <img src="././img/cgvlogo.png" alt="logo" />
    //                 </a>
    //                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon" />
    //                 </button>
    //                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //                     <ul className="navbar-nav">
    //                         <li className="nav-item dropdown">
    //                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropMovieLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                 Phim
    //                             </a>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropMovieLink">
    //                                 <NavLink className="dropdown-item" to="/movie-list">Phim Đang Chiếu</NavLink>
    //                                 <a className="dropdown-item" href="#">Phim Sắp Chiếu</a>
    //                             </div>
    //                         </li>
    //                         <li className="nav-item dropdown">
    //                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                 Rạp CGV
    //                             </a>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                                 <a className="dropdown-item" href="#">Tất Cả Các Rạp</a>
    //                                 <a className="dropdown-item" href="#">Rạp Đặc Biệt</a>
    //                                 <a className="dropdown-item" href="#">Rạp 3D</a>
    //                             </div>
    //                         </li>
    //                         <li className="nav-item dropdown">
    //                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                 Thành viên
    //                             </a>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                                 <a className="dropdown-item" href="#">Tài khoản CGV</a>
    //                                 <a className="dropdown-item" href="#">Quyền lợi</a>
    //                             </div>
    //                         </li>
    //                         <li className="nav-item dropdown">
    //                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                 Cultureplex
    //                             </a>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                                 <a className="dropdown-item" href="#">Quầy Online</a>
    //                                 <a className="dropdown-item" href="#">Thuê Rạp & Vé Nhóm</a>
    //                                 <a className="dropdown-item" href="#">e-CGV</a>
    //                                 <a className="dropdown-item" href="#">CGV eGift</a>
    //                                 <a className="dropdown-item" href="#">CGV Rules</a>
    //                             </div>
    //                         </li>
    //                         <li className="nav-item dropdown">
    //                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                 Tuyển dụng
    //                                 <img className='hot-job' src="././img/hot-jobs.png" alt="hot-job" />
    //                             </a>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                                 <a className="dropdown-item" href="#">Tuyển dụng</a>
    //                                 <a className="dropdown-item" href="#">Khối Văn Phòng</a>
    //                                 <a className="dropdown-item" href="#">Khối Cụm Rạp</a>
    //                             </div>
    //                         </li>
    //                     </ul>
    //                 </div>
    //                 <div className='header-search'>
    //                     <div className='header-search-left'>
    //                         <p className='kenhcine'>
    //                             <img src="././img/kenhcine.gif" alt="kên cine" />
    //                         </p>
    //                     </div>
    //                     <div className='header-search-right'>
    //                         <p>
    //                             <a href="">
    //                                 <img src="././img/mua-ve_ngay.png" alt="mua-ve" />
    //                             </a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </nav>
    //             {/* <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    //                 <div className="container">
    //                     <a className="navbar-brand" href="index.html">Jobpply</a>
    //                     <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
    //                         <span className="oi oi-menu" /> Menu
    //                     </button>
    //                     <div className="navbar-collapse collapse" id="ftco-nav" style={{}}>
    //                         <ul className="navbar-nav ml-auto">
    //                             <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
    //                             <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
    //                             <li className="nav-item"><a href="candidates.html" className="nav-link">Canditates</a></li>
    //                             <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
    //                             <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
    //                             <li className="nav-item cta mr-md-1"><a href="new-post.html" className="nav-link">Post a Job</a></li>
    //                             <li className="nav-item cta cta-colored"><a href="job-post.html" className="nav-link">Want a Job</a></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </nav> */}



    //         </div>
    //     </div>

    // )
}
