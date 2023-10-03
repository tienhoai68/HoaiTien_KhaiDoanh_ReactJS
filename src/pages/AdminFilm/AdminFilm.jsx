import React, { useEffect, useState } from 'react';
import { filmService } from '../../services/Films';
import { NavLink } from 'react-router-dom';

import './AdminFilm.scss'
import { Button } from 'antd';

export default function AdminFilm() {

  const [filmList, setFilmList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const fistIndex = lastIndex - recordsPerPage;
  const records = filmList.slice(fistIndex, lastIndex);
  const npage = Math.ceil(filmList.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);



  useEffect(() => {
    fetchFilmList();
  }, [filmList])

  const fetchFilmList = async () => {
    const result = await filmService.fetchFilmsListApi();
    setFilmList(result.data.content);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const result = await filmService.fetchFilmDeleteApi(id);
    console.log(result.data.content)
    if (result.data.content) {
      alert("Xóa phim thành công")
    }
  }
  return (
    <div>

      <h1>Quản lý phim</h1>
      <button className='mb-3'>Thêm phim</button>
      <table className='table'>
        <thead>
          <th>Mã phim</th>
          <th>Hình ảnh </th>
          <th>Tên phim</th>
          <th>Mô tả</th>
          <th>Hành động</th>
        </thead>
        <tbody>
          {
            records.map((element, idx) => (
              <tr key={idx}>
                <td>{element.maPhim}</td>
                <td> <img width={100} height={100} src={element.hinhAnh} alt="" /></td>
                <td>{element.tenPhim}</td>
                <td>
                  {element.moTa.length > 50 ? element.moTa.substr(0, 50) + '...' : element.moTa}
                </td>
                <td>
                  <NavLink to={`/admin/films/edit/${element.maPhim}`} className="mr-2" >
                    <i className="fa-solid fa-magnifying-glass" />
                  </NavLink>
                  <NavLink onClick={() => handleDelete(element.maPhim)}> <i className="fa-solid fa-trash" /></NavLink>
                </td>
              </tr>))}
        </tbody>
      </table>
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={prePage}>Prev</a>
          </li>
          {
            number.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ""}`} key={i}>
                <a href="#" className='page-link' onClick={() => changeCPage(n)}>{n}</a>
              </li>
            ))
          }
          <li className='page-item'>
            <a href="#" className='page-link' onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )

  function prePage() {
    if (currentPage !== fistIndex) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== fistIndex) {
      setCurrentPage(currentPage + 1)
    }
  }
}
