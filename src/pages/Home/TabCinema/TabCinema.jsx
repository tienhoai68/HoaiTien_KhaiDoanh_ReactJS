import React, { Fragment, useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { cinemaService } from '../../../services/cinema';
import moment from 'moment';
const { TabPane } = Tabs;

export default function TabCinema() {
  const [tabPosition, setTabPosition] = useState('left');
  const [cinema, setCinema] = useState([])
  useEffect(() => {
    fetchCinema();
  }, [])

  const fetchCinema = async () => {
    const result = await cinemaService.fetchCinemaApi();
    setCinema(result.data.content)
  }

  const renderTabpane = () => {
    return cinema?.map((element, index) => {
      return (
        <TabPane tab={<img src={element.logo} className='rounded-circle' />} key={index}>
          <Tabs tabPosition={tabPosition}>
            {element.lstCumRap.map((element, index) => {
              // console.log(element);
              return <TabPane tab={<div className='cinema-name text-left'>
                <div>{element.tenCumRap}</div>
                <div className='address'>{element.diaChi}</div>
              </div>} key={index}>
                {element.danhSachPhim.map((element) => {
                  console.log(element);
                  return <Fragment key={element.maPhim}>
                    <div className='d-flex'>
                      <img className='img-movie' src={element.hinhAnh} alt="" />
                      <div className='content-movie'>
                        <h2>{element.tenPhim}</h2>
                        <div>
                          {element.lstLichChieuTheoPhim.map((element) => {
                            return <Fragment key={element.maLichChieu}>
                              <button className='date'>{moment(element.ngayChieuGioChieu).format("LT")}</button>
                            </Fragment>
                          })}
                        </div>
                      </div>
                    </div>
                  </Fragment>
                })}
              </TabPane>
            })}
          </Tabs>
        </TabPane>
      )
    })
  }
  return (
    <div className='container  mt-5'>
      <Tabs tabPosition={tabPosition}>
        {renderTabpane()}
      </Tabs>
    </div>
  )
}
