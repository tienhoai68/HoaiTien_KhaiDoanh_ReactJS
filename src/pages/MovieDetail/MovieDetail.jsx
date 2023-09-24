import React, { useEffect, useState } from 'react'
import "./movieDetail.scss"
import { movieService } from '../../services/movie';
import { useParams } from 'react-router';
import ShowTime from './components/ShowTime';
import { formatDate } from '../../utils/formatDate';
import { Modal } from 'antd';
export default function MovieDetail() {
  const param = useParams();
  const [detail, setDetail] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const fetchMovieDetail = async () => {
    const result = await movieService.fecthMovieDetailApi(param.movieId);
    setDetail(result.data.content)
  };

  const showModal = (videoUrl) => {
    const videoUrlWithParams = `${videoUrl}?autoplay=1&mute=1`;
    setVideoUrl(videoUrlWithParams);
    setIsModalVisible(true);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);


  return (
    <div className='film-details-content'>
      <div className='film-details-wrap container'>
        <div className='film-item t-2d row justify-content-center'>
          <div className='film-item-pic mb-2 col-8 col-md-4 col-lg-4'>
            <img src={detail.hinhAnh} alt=".." />
          </div>
          <div className='film-item-txt col-10 col-md-8 col-8'>
            <h3>{detail.tenPhim}</h3>
            <div className='film-overview'>
              <span className='l-title'>Khởi chiếu: </span>
              <span className='l-value'>{formatDate(detail.ngayKhoiChieu)}</span>
            </div>
            <div className='film-item-type'>
              <div className='icon-2d'></div>
            </div>
            <p>Mô tả: {detail.moTa}</p>
            <div className='film-overview'>
              <span className='l-title'>Đánh giá:</span>
              <span className='l-comment'></span>
              <span className='l-comment'></span>
              <span className='l-comment'></span>
              <span className='l-comment'></span>
              <span className='l-comment'></span>
            </div>
            <div className='film-item-btn'>
              <button onClick={()=> showModal(detail.trailer)} className='trailler-btn video-popup'>TRAILER</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <ShowTime />

      </div>
      <Modal
        title="TRAILER"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        width={800}
        footer={null}
      >
        <iframe
          title="YouTube Video"
          width="100%"
          height="400"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>

  )
}
