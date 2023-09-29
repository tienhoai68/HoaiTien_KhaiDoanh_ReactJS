import React, { useState } from "react";
import "./Login.scss";
import Register from "./components/Register/Register";
import { userService } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  taiKhoan: Yup.string().required('(*) Tài khoản không được để trống'),
  matKhau: Yup.string().required('(*) Mật khẩu không được để trống'),
})

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [stateLogin, setStateLogin] = useState({
  //   taiKhoan: "",
  //   matKhau: "",
  // });

  const handleClickRegister = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };
  const handleClickLogin = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  // const handleChangeLogin = (event) => {
  //   setStateLogin({
  //     ...stateLogin,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleSubmitLogin = async (values, { resetForm }) => {
    // event.preventDefault();
    // const result = await userService.loginApi(stateLogin);
    // console.log(result);
    // dispatch(setUserInfoAction(result.data.content));
    // localStorage.setItem("USER_INFO", JSON.stringify(result.data.content));
    // navigate("/");
    console.log(values);
    // Gọi hàm xử lý đăng ký ở đây
    // resetForm();
  };

  return (
    <div className="background-login">
      <div className="container" id="container">
        <div className="form-container register-container">
          {/* cắt thành component Register */}
          <Register />
        </div>
        <Formik
          initialValues={{
            taiKhoan: '',
            matKhau: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitLogin}
        >
          <div className="form-container login-container">
            <Form onSubmit={handleSubmitLogin} className="form-lg">
              <h1>Login here</h1>
              <div className="form-control2">
                <Field name='taiKhoan' type='text' placeholder='Tài khoản' />
                <span></span>
                <ErrorMessage name='taiKhoan' component='label' className='form-label text-danger' />
              </div>
              <div className="form-control2">
                <Field name='matKhau' type='password' placeholder='Mật khẩu' />
                <span></span>
                <ErrorMessage name='matKhau' component='label' className='form-label text-danger' />
              </div>
              <button type="submit">Login</button>
            </Form>
          </div>
        </Formik>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel over-left">
              <h1 className="title">Hello</h1>
              <p>Nếu bạn có tài khoản, hãy đăng nhập</p>
              <button onClick={handleClickLogin} className="ghost" id="login">
                Login
                <i className="fa-solid fa-arrow-left" />
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1 className="title">Hello</h1>
              <p>Nếu bạn không có tài khoản, hãy đăng ký</p>
              <button
                onClick={handleClickRegister}
                className="ghost"
                id="register"
              >
                Register
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
