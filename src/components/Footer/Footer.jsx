import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-brand-slide">
          <div className="sect-smuse"></div>
        </div>
        <div className="footer-policy">
          <div className="content-policy row">
            <div className="cgv-vietnam col-3">
              <h3>CGV Việt Nam</h3>
              <ul>
                <li>
                   Giới Thiệu
                </li>
                <li>
                   Tiện Ích Online
                </li>
                <li>
                   Thẻ Quà Tặng
                </li>
                <li>
                   Tuyển Dụng
                </li>
                <li>
                   Liên Hệ Quảng Cáo CGV
                </li>
              </ul>
            </div>
            <div className="cgv-policy col-3">
              <h3>Điều khoản sử dụng</h3>
              <ul>
                <li>
                   Điều Khoản Chung
                </li>
                <li>
                   Điều Khoản Giao Dịch
                </li>
                <li>
                   Chính Sách Thanh Toán
                </li>
                <li>
                   Chính Sách Bảo Mật
                </li>
                <li>
                   Câu Hỏi Thường Gặp
                </li>
              </ul>
            </div>
            <div className="follow-us col-3">
              <h3>Kết nối với chúng tôi</h3>
              <ul className="d-flex">
                <li className="follow-fb" ></li>
                <li className="follow-fb"></li>
                <li className="follow-instagram"></li>
                <li className="follow-zalo"></li>
              </ul>
            </div>
            <div className="customer-cgv col-3"></div>
          </div>
        </div>
        <div className="footer-address"></div>
      </div>
    </div>
  );
}
