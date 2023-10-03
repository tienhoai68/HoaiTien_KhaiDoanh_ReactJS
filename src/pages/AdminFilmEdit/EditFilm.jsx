import React, { useEffect, useState } from 'react';
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
} from 'antd';
import moment from 'moment';
import { filmService } from '../../services/Films';
import { useParams } from 'react-router-dom';



export default function AddFilm() {
    const params = useParams();
    useEffect(() => {
        fetchFilmDetail();
    }, []);
    const fetchFilmDetail = async () => {
        const result = await filmService.fetchFilmDetaiApi(params.filmId);
        console.log(result.data.content)
        setState(result.data.content);
    }
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const [img, setImg] = useState('');

    const [state, setState] = useState({
        maNhom: 'GP01',
        tenPhim: '',
        trailer: '',
        moTa: '',
        ngayKhoiChieu: '',
        dangChieu: false,
        sapChieu: false,
        Hot: false,
        danhGia: 0,
        hinhAnh: {},
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })

    }
    const handleChangeSwitch = (value, name) => {
        setState({
            ...state,
            [name.target.offsetParent.name]: value,
        })
    }
    const handleChangeDate = (value) => {
        const ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        setState({
            ...state,
            'ngayKhoiChieu': ngayKhoiChieu,
        })
    }

    const handleChangeImg = (event) => {
        let file = event.target.files[0];
        console.log(file);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            setImg(event.target.result);
        }
        setState({
            ...state,
            'hinhAnh': file,
        })
    }
    const handleSubmit = () => {

        let formData = new FormData();
        for (let name in state) {
            if (name !== "hinhAnh") {
                formData.append(name, state[name]);
            } else {
                formData.append('File', state.hinhAnh, state.hinhAnh.name)
            }
        }
        console.log(formData)

    }


    return (
        <div>
            <h1 className='md-5'>Thêm phim</h1>
            <Form
                onSubmitCapture={handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên Phim">
                    <Input value={state.tenPhim} name='tenPhim' onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input value={state.trailer} name='trailer' onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Mô Tả">
                    <Input value={state.moTa} name='moTa' onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Date">
                    <DatePicker value={moment(state.ngayKhoiChieu, 'DD/MM/YYYY')} name='ngayKhoiChieu' onChange={handleChangeDate} />
                </Form.Item>
                <Form.Item label="Đang Chiếu" valuePropName="checked">
                    <Switch checked={state.dangChieu} name='dangChieu' onChange={handleChangeSwitch} />
                </Form.Item>
                <Form.Item label="Sắp Chiếu" valuePropName="checked">
                    <Switch checked={state.sapChieu} name='sapChieu' onChange={handleChangeSwitch} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch checked={state.Hot} name='Hot' onChange={handleChangeSwitch} />
                </Form.Item>
                <Form.Item label="Đánh Giá">
                    <InputNumber value={state.danhGia} min={1} max={10} />
                </Form.Item>
                <Form.Item label="Hình Ảnh">
                    <input name='hinhAnh' type="File" onChange={handleChangeImg} />
                    <br />
                    <img style={{ width: 150, height: 150 }} src={img === '' ? state.hinhAnh : img} alt="..." />
                </Form.Item>
                <Form.Item label="Tác Vụ">
                    <button className='p-2' type='submit'>Thêm Phim</button>
                </Form.Item>
            </Form>
        </div>

    );
}