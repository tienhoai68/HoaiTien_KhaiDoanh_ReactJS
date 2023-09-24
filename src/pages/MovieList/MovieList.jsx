import React, { useEffect, useState } from "react";
import "./MovieList.scss";
import "./ResponsiveMovieList.scss"
import { movieService } from "../../services/movie";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const userState = useSelector((state) => state.userReducer);
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const result = await movieService.fecthMovieListApi();
    setMovieList(result.data.content);
  };

  const handleBooking = (codeMovie) => {
    if(userState) {
      navigate(`/movie-detail/${codeMovie}`)
    }else{
      navigate("/login")
    }
  }

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
                  <div className="mb-3 mb-lg-4 button-group">
                    <button onClick={() => navigate(`/movie-detail/${element.maPhim}`)} className="button_default btn_details mr-2">Chi Tiết</button>
                    <button onClick={() => handleBooking(element.maPhim)} className="button_default btn_ticket ">Đặt vé</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
