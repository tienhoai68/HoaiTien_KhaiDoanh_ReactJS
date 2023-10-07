import React, { useEffect, useState } from "react";
import { filmService } from "../../services/Films";
import { NavLink, useNavigate } from "react-router-dom";

import "./AdminFilm.scss";

export default function AdminFilm() {
  const navigate = useNavigate();
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
  }, []);

  const fetchFilmList = async () => {
    const result = await filmService.fetchFilmsListApi();
    setFilmList(result.data.content);
  };

  const handleDelete = async (id) => {
    const result = await filmService.fetchFilmDeleteApi(id);
    console.log(result.data.content);
    if (result.data.content) {
      alert("Xóa phim thành công !!!");
    }
  };

  const handleSearch = async (event) => {
    if (event.target.value !== "") {
      const result = await filmService.fetchFilmSearchApi(event.target.value);

      setFilmList(result.data.content);
    } else {
      fetchFilmList();
    }
  };
  const renderFilm = () => {
    return records.map((element, idx) => {
      return (
        <tr key={idx}>
          <td>{element.maPhim}</td>
          <td>
            {" "}
            <img width={100} height={100} src={element.hinhAnh} alt="" />
          </td>
          <td>{element.tenPhim}</td>
          <td>
            {element.moTa.length > 50
              ? element.moTa.substr(0, 50) + "..."
              : element.moTa}
          </td>
          <td className="listAction">
            <NavLink
              to={`/admin/films/edit/${element.maPhim}`}
              className="mr-2 btnAction"
            >
              <i className="fa-solid fa-magnifying-glass " />
            </NavLink>
            <NavLink
              className="mr-2 btnAction"
              onClick={() => handleDelete(element.maPhim)}
            >
              <i className="fa-solid fa-trash" />
            </NavLink>
            <NavLink
              className="mr-2 btnAction"
              to={`/admin/films/showtime/${element.maPhim}`}
            >
              <i className="fa-solid fa-calendar-days" />
            </NavLink>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Quản lý phim</h1>
      <button
        className="btn btn-info mb-3"
        onClick={() => navigate(`/admin/films/addnew`)}
      >
        Thêm phim
      </button>
      <div className="row mb-3">
        <div className="col">
          <div className="input-group">
            <input
              type="text"
              onChange={handleSearch}
              className="form-control"
              placeholder="Tìm kiếm theo tên phim"
            />
            <div className="input-group-prepend">
              <span className="input-group-text" id="btnTimNV">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <th>Mã phim</th>
          <th>Hình ảnh </th>
          <th>Tên phim</th>
          <th>Mô tả</th>
          <th>Hành động</th>
        </thead>
        <tbody>{renderFilm()}</tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {number.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  function prePage() {
    if (currentPage !== fistIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== fistIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
}
