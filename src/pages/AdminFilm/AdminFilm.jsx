import React, { Fragment, useEffect, useState } from 'react';
import { Button, Table, Input } from 'antd';

import { filmService } from '../../services/Films';
import { NavLink } from 'react-router-dom';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);


export default function AdminFilm() {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    fetchFilmList();
  }, [])

  const fetchFilmList = async () => {
    const result = await filmService.fetchFilmsListApi();
    setFilmList(result.data.content);
  };

  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => b.maPhim - a.maPhim,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film) => {
        return <Fragment>
          <img src={film.hinhAnh} alt={film.tenPhim} width={100} height={100} />
        </Fragment>
      }
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],

    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      render: (text, film) => {
        return <Fragment>
          {film.moTa.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}
        </Fragment>
      }
    },
    {
      title: 'Hành động',
      dataIndex: 'hanhDong',
      render: (text, film) => {
        return <Fragment >
          <NavLink to={`/admin/films/edit/${film.maPhim}`} className="mr-2" >
            <i className="fa-solid fa-magnifying-glass" />
          </NavLink>
          <NavLink className="">
            <i className="fa-solid fa-trash" />
          </NavLink>
        </Fragment>
      }

    },

  ];
  const data = filmList;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <div>

      <h1>Quản lý phim</h1>
      <Button className='mb-3'>Thêm phim</Button>
      <Search
        placeholder="input search text"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
