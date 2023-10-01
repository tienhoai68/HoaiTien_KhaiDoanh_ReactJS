import React, { useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { filmService } from '../../services/Films';


export default function AddnewFilm() {
  const [componentSize, setComponentSize] = useState('default');
  const [img, setImg] = useState('');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    initialValues: {
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
    },
    onSubmit: async (value) => {

      let formData = new FormData();
      for (let key in value) {
        if (key !== "hinhAnh") {
          formData.append(key, value[key]);
        }
        if (key === "hinhAnh") {
          formData.append('File', value.hinhAnh, value.hinhAnh.name);
        }
      }
      console.log(formData.get("File"))
      // const result = await filmService.fetchAddNewFilm(formData);
      // console.log(result.data.content)
    }

  }
  )

  const handleChangeDate = (value) => {
    let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
    formik.setFieldValue(ngayKhoiChieu);
  }

  const handleChangeSwitch = (name) => {
    return (value) => { formik.setFieldValue(name, value) }
  }
  const handleChangeFile = (event) => {
    let file = event.target.files[0];
    if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png' || file.type === "image/gif") {
      let reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setImg(event.target.result);
      }
      formik.setFieldValue('hinhAnh', file)
    }
  }


  return (
    <div>
      <h1 className='md-5'>Thêm phim</h1>
      <Form
        onSubmitCapture={formik.handleSubmit}
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
          <Input name='tenPhim' onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name='trailer' onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô Tả">
          <Input name='moTa' onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDate} />
        </Form.Item>
        <Form.Item label="Đang Chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch('dangChieu')} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch('sapChieu')} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeSwitch('Hot')} />
        </Form.Item>
        <Form.Item label="Đánh Giá">
          <InputNumber onChange={handleChangeSwitch('danhGia')} min={1} max={10} />
        </Form.Item>
        <Form.Item label="Hình Ảnh">
          <input name='hinhAnh' type="File" onChange={handleChangeFile} accept='image/jpg, image/gif ,image/png' />
          <br />
          <img style={{ width: 150, height: 150 }} src={img} alt="..." />
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <button className='p-2' type='submit'>Thêm Phim</button>
        </Form.Item>
      </Form>
    </div>

  );
}
