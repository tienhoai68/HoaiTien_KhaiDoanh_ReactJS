import React, { useEffect, useState } from 'react'
import { Button, Form, InputNumber, DatePicker, Cascader } from 'antd';
import { filmService } from '../../../services/Films';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export default function AdminShowTime() {
    const params = useParams();
    const [listHeThongRap, setListHeThongRap] = useState([]);
    const [listCumRap, setListCumRap] = useState([]);
    const [lichChieu, setLichChieu] = useState({
        maPhim: params.filmId,
        ngayChieuGioChieu: '',
        maRap: '',
        giaVe: 0,
    })
    useEffect(() => {
        heThongRap();
    }, [])
    const heThongRap = async () => {
        const result = await filmService.fetchHeThongRapApi();
        setListHeThongRap(result.data.content);
    }
    const renderHeThongRap = () => {
        return listHeThongRap?.map((element) => {
            return { label: element.tenHeThongRap, value: element.maHeThongRap }
        })
    }
    const handleChangeHeThongRap = async (value) => {
        const result = await filmService.fetchCumRapApi(value);
        setListCumRap(result.data.content)
    }
    const renderCumRap = () => {
        return listCumRap?.map((element) => {
            return { label: element.tenCumRap, value: element.maCumRap }
        })
    }
    const handleChangeCumRap = (value) => {
        setLichChieu({
            ...lichChieu,
            maRap: value[0],
        })
    }

    const onOk = (value) => {
        const date = moment(value).format('DD/MM/YYYY hh:mm:ss')
        setLichChieu({
            ...lichChieu,
            ngayChieuGioChieu: date,
        })
    }
    const onChange = (value) => {
        const date = moment(value).format('DD/MM/YYYY hh:mm:ss')
        setLichChieu({
            ...lichChieu,
            ngayChieuGioChieu: date,
        })
    }
    const onChangeGiaVe = (value) => {
        setLichChieu({
            ...lichChieu,
            giaVe: value,
        })
    }
    const handleSubmit = async () => {
        const result = await filmService.fetchTaoLichChieuApi(lichChieu);
        if (result.data.content) {
            alert("Thêm lịch chiếu thành công !!!")
        }
    }
    return (
        <Form
            onSubmitCapture={handleSubmit}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
        >
            <h1 className='mb-5'>Tạo lịch chiếu</h1>
            <Form.Item label="Hệ Thống Rạp">
                <Cascader name='' options={renderHeThongRap()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
            </Form.Item>
            <Form.Item label="Cụm Rạp">
                <Cascader options={renderCumRap()} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />
            </Form.Item>
            <Form.Item label="Ngày Giờ Chiếu">
                <DatePicker format='DD/MM/YYYY hh:mm:ss' showTime onChange={onChange} onOk={onOk} />
            </Form.Item>
            <Form.Item label="Giá Vé">
                <InputNumber min={75000} max={200000} onChange={onChangeGiaVe} />
            </Form.Item>
            <Form.Item label="Chức Năng">
                <button type='submit'>Tạo lịch chiếu</button>
            </Form.Item>
        </Form>
    );

}
