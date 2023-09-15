import React from 'react'
import "./movieDetail.scss"
export default function MovieDetail() {
  return (
    <div className='film-details-content m-5'>
      <div className='film-details-wrap container'>
        <div className='film-item t-2d row'>
            <div className='film-item-pic col-4'>
              <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/dia-dang-sup-do.jpg" alt="" />
            </div>
            <div className='film-item-txt col-8'>
              <h3>ĐỊA ĐÀNG SỤP ĐỔ (T16)</h3>
              <div className='film-overview'>
                <span className='l-title'>Khởi chiếu: </span>
                <span className='l-value'>Từ 01/09/2023</span>
              </div>
              <div className='film-item-type'>
                <div className='icon-2d'></div>
              </div>
              <p>Mô tả</p>
              <div className='film-overview'>
                <span className='l-title'>Đánh giá:</span>
                <span className='l-comment'></span>
                <span className='l-comment'></span>
                <span className='l-comment'></span>
                <span className='l-comment'></span>
                <span className='l-comment'></span>
              </div>
              <div className='film-item-btn'>
                <button className='trailler-btn'>TRAILER</button>
                <button className='cart-btn'>MUA VÉ</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
