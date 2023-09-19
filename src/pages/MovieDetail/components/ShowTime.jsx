import React, { useEffect, useState } from 'react'
import { cinemaService } from '../../../services/cinema'
import { useParams } from 'react-router-dom'
import "./ShowTime.scss"

export default function ShowTime() {
  const params = useParams();

  const [showTime, setShowTime] = useState([]);

  const fetchShowTime = async () => {
    const result = await cinemaService.fecthShowTimeApi(params.movieId);
    setShowTime(result.data.content.heThongRapChieu);
  }

  const renderTabList = () => {
    return showTime.map((element, idx) => {
      return (
        <a key={element.maHeThongRap} className={`nav-link mb-3 p-3 shadow " id="v-pills-home-tab ${idx === 0 && "active"}`} data-toggle="pill" href={`#${element.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
          <i className="fa fa-user-circle-o mr-2" />
          <span className="font-weight-bold small text-uppercase">{element.tenHeThongRap}</span></a>
      )
    })
  }

  useEffect(() => {
    fetchShowTime();
  }, []);

  return (
    <div className="row ">
      <div className="col-md-3 ">
        {/* Tabs nav */}
        <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {renderTabList()}
        </div>
      </div>
      <div className="col-md-9">
        {/* Tabs content */}
        <div className="tab-content" id="v-pills-tabContent">
          <div className="nav-showtime tab-pane fade shadow rounded show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <h4 className="font-italic mb-4">Personal information</h4>
            <p className="font-italic mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="nav-showtime tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h4 className="font-italic mb-4">Bookings</h4>
            <p className="font-italic mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="nav-showtime tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <h4 className="font-italic mb-4">Reviews</h4>
            <p className="font-italic mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="nav-showtime tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            <h4 className="font-italic mb-4">Confirm booking</h4>
            <p className="font-italic mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
