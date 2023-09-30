import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { userService } from '../../../../services/user';


const validationSchema = Yup.object().shape({
  taiKhoan: Yup.string().required('(*) Tài khoản không được để trống'),
  matKhau: Yup.string().required('(*) Mật khẩu không được để trống').min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
  email: Yup.string().email('(*) Email không hợp lệ').required('(*) Email không được để trống'),
  soDt: Yup.string().required('(*) Số điện thoại không được để trống'),
  hoTen: Yup.string().required('(*) Họ tên không được để trống'),
});

export default function Register() {
  const navigate = useNavigate();

  const handleSubmitRegister = async (values, { resetForm }) => {
    await userService.registerApi(values);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Bạn đã đăng kí thành công',
    });
    resetForm();
    navigate("/login");
  };

  return (
    <div>
      <h1>Register here</h1>
      <Formik
        initialValues={{
          taiKhoan: '',
          matKhau: '',
          email: '',
          soDt: '',
          maNhom: 'GP08',
          hoTen: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmitRegister}
      >
        <Form className="register-form">
          <div className='form-control'>
            <Field name='taiKhoan' type='text' placeholder='Tài khoản' />
            <span></span>
            <ErrorMessage name='taiKhoan' component='label' className='form-label text-danger' />
          </div>
          <div className='form-control'>
            <Field name='matKhau' type='password' placeholder='Mật khẩu' />
            <span></span>
            <ErrorMessage name='matKhau' component='label' className='form-label text-danger' />
          </div>
          <div className='form-control'>
            <Field name='email' type='text' placeholder='Email' />
            <span></span>
            <ErrorMessage name='email' component='label' className='form-label text-danger' />
          </div>
          <div className='form-control'>
            <Field name='soDt' type='text' placeholder='Số điện thoại' />
            <span></span>
            <ErrorMessage name='soDt' component='label' className='form-label text-danger' />
          </div>
          <div className='form-control'>
            <Field name='hoTen' type='text' placeholder='Họ Tên' />
            <span></span>
            <ErrorMessage name='hoTen' component='label' className='form-label text-danger' />
          </div>
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
}
