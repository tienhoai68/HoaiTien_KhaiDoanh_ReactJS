import React, { useEffect, useState } from "react";
import "./MovieList.scss";
import "./ResponsiveMovieList.scss"
import { movieService } from "../../services/movie";
export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const result = await movieService.fecthMovieListApi();
    setMovieList(result.data.content);
    console.log(result.data.content);
  };

  const renderMovieList = () => {
    return movieList.map((element) => {
      return (
        <div key={element.maPhim} className="col-10 col-sm-8 col-md-6 col-lg-4">
          <div className="main ">
            <div className="movie-img">
              <img src={element.hinhAnh} alt="" className="back-img" />
              <img src={element.hinhAnh} alt="" className="movie-cover " />
              <i className="fa fa-play"></i>
            </div>
            <div>
            <h6 className="mb-0">{element.tenPhim}</h6>
            <img src="././img/rating.png" alt="" className="rating" />
            </div>
            <div className="ticket-head text-center">
              <div className="ticket-container mx-auto ">
                <div className="ticket__content">
                  <h4 className="ticket__movie-title">{element.tenPhim}</h4>
                  <p className="ticket__movie-slogan">
                    {element.moTa}
                  </p>
                  {/* <button className="ticket__buy-btn">Buy now</button> */}
                  <div className="mb-3 mb-lg-4 button-group"> 
                  <button className="button_default btn_details mr-2">Chi Tiết</button>
                  <button className="button_default btn_ticket ">Đặt vé</button>
                  </div>
                </div>
              </div>
              {/* <button className="mr-1 btn btn-success">Chi Tiết</button>
              <button className="btn btn-danger">Đặt vé</button> */}
            </div>
          </div>
          {/* <div className="card mb-4">
            <img
              className="card-img-top card-img"
              src={element.hinhAnh}
              alt="..."
            />
            <div style={{ background: "#fdfcf0" }} className="card-body">
              <h2 style={{ fontSize: 20 }} className="card-title text-center">
                {element.tenPhim}
              </h2>
              <button className="btn btn-success ">
                <i class="fa-regular fa-thumbs-up"></i> Like: {element.danhGia}
              </button>
              <button className="btn btn-danger ml-lg-2">Đặt vé</button>
            </div>
          </div> */}
        </div>
      );
    });
  };

  return (
    <div className="main-movie container">
      <div className="title-movie">
        <div className="page-title category-title">
          <h1>Phim Đang Chiếu</h1>
        </div>
        <div className="py-5">
          <div className="row justify-content-center">
            {renderMovieList()}
          </div>
          {/* <div className="col-md-4">
            <div className="main-movie">
                <div className="movie-img">
                  <img src="" alt="" className="back-img" />
                  <img src="" alt="" className="movie-cover" />
                  <i className="fa fa-play"></i>
                </div>
                <h6>Wonder</h6>
                <img src="" alt="" className="rating"/>
                <div className="head1 text-center">
                  <p>Rating</p>
                </div>
                <div className="head2 text-center">
                  <p>Rating</p>
                </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
