import React from 'react'
import "./MovieList.scss"
export default function MovieList() {
  return (
    <div className='main'>
      <div className='title-movie'>
        <div className='page-title category-title'>
          <h1>Phim Đang Chiếu</h1>
        </div>
        <div className='py-5'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className="card mb-4">
                <img className="card-img-top w-100" src="https://cinestar.com.vn/pictures/Cinestar/07-2022/minion.jpg" alt="..." />
                <div style={{background: "#fdfcf0"}} className="card-body">
                  <h2 style={{ fontSize: 24 }} className="card-title text-center">ÁC QUỶ MA SƠ II</h2>
                  <p></p>
                  <button className="btn btn-success "><i class="fa-regular fa-thumbs-up"></i> Like: 10</button>
                  <button className="btn btn-danger ml-lg-2">Đặt vé</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className="card mb-4">
                <img className="card-img-top w-100" src="https://cinestar.com.vn/pictures/Cinestar/07-2022/minion.jpg" alt="..." />
                <div style={{background: "#fdfcf0"}} className="card-body">
                  <h2 style={{ fontSize: 24 }} className="card-title text-center">ÁC QUỶ MA SƠ II</h2>
                  <p></p>
                  <button className="btn btn-success "><i class="fa-regular fa-thumbs-up"></i> Like: 10</button>
                  <button className="btn btn-danger ml-lg-2">Đặt vé</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className="card mb-4">
                <img className="card-img-top w-100" src="https://cinestar.com.vn/pictures/Cinestar/07-2022/minion.jpg" alt="..." />
                <div style={{background: "#fdfcf0"}} className="card-body">
                  <h2 style={{ fontSize: 24 }} className="card-title text-center">ÁC QUỶ MA SƠ II</h2>
                  <p></p>
                  <button className="btn btn-success "><i class="fa-regular fa-thumbs-up"></i> Like: 10</button>
                  <button className="btn btn-danger ml-lg-2">Đặt vé</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className="card mb-4">
                <img className="card-img-top w-100" src="https://cinestar.com.vn/pictures/Cinestar/07-2022/minion.jpg" alt="..." />
                <div style={{background: "#fdfcf0"}} className="card-body">
                  <h2 style={{ fontSize: 24 }} className="card-title text-center">ÁC QUỶ MA SƠ II</h2>
                  <p></p>
                  <button className="btn btn-success "><i class="fa-regular fa-thumbs-up"></i> Like: 10</button>
                  <button className="btn-buyticket btn btn-danger ml-lg-2">Đặt vé</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
