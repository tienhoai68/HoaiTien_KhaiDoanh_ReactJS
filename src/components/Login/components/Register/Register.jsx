import React, { useState } from 'react'
import { userService } from '../../../../services/user';

export default function Register() {

  const [stateRegister, setStateRegister] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    hoTen: ""
  });

  const handleChangeRegister = (event) => {
    setStateRegister({
      ...stateRegister,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    console.log(stateRegister);
    await userService.registerApi(stateRegister);
  }
  // console.log(stateRegister);


  return (
    <form onSubmit={handleSubmitRegister}>
      <h1>Register here</h1>
      <div className='form-control'>
        <input name='taiKhoan' onChange={handleChangeRegister} type="text" placeholder='Tài khoản' />
        <span></span>
      </div>
      <div className='form-control'>
        <input name='matKhau' onChange={handleChangeRegister} type="text" placeholder='Mật khẩu' />
        <span></span>
      </div>
      <div className='form-control'>
        <input name='email' onChange={handleChangeRegister} type="text" placeholder='Email' />
        <span></span>
      </div>
      <div className='form-control'>
        <input name='soDt' onChange={handleChangeRegister} type="text" placeholder='Số điện thoại' />
        <span></span>
      </div>
      {/* <div className='form-control'>
        <input onChange={handleChangeRegister} type="text" placeholder='Mã nhóm' />
        <span></span>
      </div> */}
      <div className='form-control'>
        <input name='hoTen' onChange={handleChangeRegister} type="text" placeholder='Họ Tên' />
        <span></span>
      </div>
      <button type='submit'>Register</button>
    </form>
  )
}
