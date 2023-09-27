import React, { useEffect, useState } from "react";
import "./SlickMovie.scss";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { movieService } from "../../../services/movie";
// import Slider from "react-slick";

export default function SlickMovie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [movieList, setMovieList] = useState([]);
  const userState = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const result = await movieService.fecthMovieListApi("GP13");
    setMovieList(result.data.content);
  };

  const handleBooking = (codeMovie) => {
    if (userState) {
      navigate(`/movie-detail/${codeMovie}`)
    } else {
      navigate("/login")
    }
  }

  const renderMovieList = () => {
    return movieList.map((element) => {
      return (
        <div key={element.maPhim} className="movie-card">
          <div className="movie-image">
            <img
              src={element.hinhAnh} // Đường dẫn hình ảnh mặc định
              alt="Sample Movie"
            />
            <span className="badge">Premium</span>
          </div>
          <div className="rating">
            <div className="star-rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <p>{element.danhGia}</p>
          </div>
          <div className="movie-details">
            <h6 className="name-movie">{element.tenPhim}</h6>
            <p className="duration">120 min</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="movie-title-container mb-5">
          <h1 className="movie-title">Phim Hot</h1>
        </div>
        <div>
          {/* <Slider {...settings}> */}
            {renderMovieList()}
          {/* </Slider> */}
        </div>
      </div>

    </div>

  );
}
