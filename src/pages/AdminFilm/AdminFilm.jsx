import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { movieService } from '../../services/movie';
import "./AdminFilm.scss"
import {
  EditOutlined
} from '@ant-design/icons';
import { filmService } from '../../services/Films';
export default function AdminFilm() {

  const [moiveList, setMovieList] = useState([]);

  useEffect(() => {
    movieListApi();
  }, [])
  const movieListApi = async () => {
    const result = await filmService.fetchFilmsListApi();
    setMovieList(result.data.content);
  }
  const renderMoive = () => {

    return moiveList.map((element, idx) => {
      return (
        <tr key={idx}>
          <td>{element.maPhim}</td>
          <td>
            <img className='img-moive' src={element.hinhAnh} alt="" />
          </td>
          <td>{element.tenPhim}</td>
          <td>{element.moTa}</td>
          <td className='d-flex'>
            <NavLink className=""><EditOutlined /></NavLink>
            <NavLink className=""><EditOutlined /></NavLink>

          </td>
        </tr>
      )
    })
  }

  return (
    <div className="card text-center">
      <div className="card-header text-left myCardHeader">
        <h3 className="text-left font-weight-bold">Quản lý Phim</h3>
        <button className='btn btn-info '>
          <NavLink to="/admin/films/addnew" className='nav-link text-white'>
            <span>Thêm Phim</span>
          </NavLink>
        </button>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Loại nhân viên" id="searchName" />
              <div className="input-group-prepend">
                <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-hover myTable">
          <thead>
            <tr>
              <th className="nowrap">
                <span className="mr-1">Mã Phim</span>

              </th>
              <th>Hình Ảnh</th>
              <th>
                <span className="mr-1">Tên Phim</span>

              </th>
              <th>Mô Tả</th>
              <th>Hoạt Động</th>
            </tr>
          </thead>
          <tbody>
            {renderMoive()}

          </tbody>
        </table>
      </div>
      <div className="card-footer myCardFooter">
        <nav>
          <ul className="pagination justify-content-center" >
          </ul>
        </nav>
      </div>
    </div>


  )
}
