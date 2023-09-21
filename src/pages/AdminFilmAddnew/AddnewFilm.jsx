import React from 'react'
import "./AdnewFilm.scss"
export default function AddnewFilm() {


  
  return (
    <div >
      <h1>Thêm phim mới</h1>
      <div className='container'>
        <form role="form">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Tên phim:</span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Trailer:</span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Tên phim:</span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Ngày khởi chiếu:</span>
              </div>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Đang chiếu:</span>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Sắp chiếu:</span>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Hot:</span>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Số sao:</span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Hình ảnh:</span>
              </div>
             <button >Choose File</button>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-text">Tác vụ:</span>
              </div>
              <button>Thêm phim</button>
            </div>
          </div>

        </form>
      </div>



    </div>
  )
}
