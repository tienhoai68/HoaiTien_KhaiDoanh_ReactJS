import React from 'react'

// import "./style.css";
import "./Login.scss";

export default function Login() {
    const handleClickRegister = () => {
        const container = document.getElementById("container");
        container.classList.add("right-panel-active");

    };

    const handleClickLogin = () => {
        const container = document.getElementById("container");
        container.classList.remove("right-panel-active");
    };
    const handleSubmitLogin = async (event) => {
        event.preventDefault();
    }


    return (
        <div className='background-login'>
            <div className='container' id='container'>
                <div className='form-container register-container'>
                    <form onSubmit={handleSubmitLogin}>
                        <h1>Register here</h1>
                        <div className='form-control'>
                            <input type="text" placeholder='Tài khoản' />
                            <span></span>
                        </div>
                        <div className='form-control'>
                            <input type="text" placeholder='Mật khẩu' />
                            <span></span>
                        </div>
                        <div className='form-control'>
                            <input type="text" placeholder='Email' />
                            <span></span>
                        </div>
                        <div className='form-control'>
                            <input type="text" placeholder='Số điện thoại' />
                            <span></span>
                        </div>
                        <div className='form-control'>
                            <input type="text" placeholder='Mã nhóm' />
                            <span></span>
                        </div>
                        <div className='form-control'>
                            <input type="text" placeholder='Họ Tên' />
                            <span></span>
                        </div>
                        <button type='submit'>Register</button>
                    </form>
                </div>
                <div className='form-container login-container'>
                    <form onSubmit={handleSubmitLogin} className='form-lg'>
                        <h1>Login here</h1>
                        <div className='form-control2'>
                            <input name='taiKhoan' type="text" placeholder='Tài khoản' />
                            <span></span>
                        </div>
                        <div className='form-control2'>
                            <input name='matKhau' type="text" placeholder='Mật Khẩu' />
                            <span></span>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                </div>
                <div className='overlay-container'>
                    <div className='overlay'>
                        <div className='overlay-panel over-left'>
                            <h1 className='title'>
                                Hello
                            </h1>
                            <p>Nếu bạn có tài khoản, hãy đăng nhập</p>
                            <button onClick={handleClickLogin} className='ghost' id='login'>
                                Login
                                <i className="fa-solid fa-arrow-left" />
                            </button>
                        </div>

                        <div className='overlay-panel overlay-right'>
                            <h1 className='title'>
                                Hello
                            </h1>
                            <p>Nếu bạn không có tài khoản, hãy đăng ký</p>
                            <button onClick={handleClickRegister} className='ghost' id='register'>
                                Register
                                <i className="fa-solid fa-arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>





    )
}
