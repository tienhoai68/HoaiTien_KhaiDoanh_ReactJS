import React from 'react'
import Navbar from './components/Navbar'

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
            <div className='header-top-account'>
              <div className='account-header-wrapper mn-login'>
                  <a href="" className='topskip-link skip-account'>
                    <span className='label'>Đăng nhập/ Đăng ký</span>
                  </a>
              </div>
            </div>        
          </div>
        </div>
      </div>
 {/* ----------Start-Navbar--------  */}
      <Navbar/>
 {/* ----------End-Navbar--------  */}
    </div>
  )
}
