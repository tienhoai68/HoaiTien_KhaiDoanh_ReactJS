import React, { useEffect, useState } from 'react'
import { userAdminService } from '../../services/userAdmin';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../../store/actions/userAdminAction';



export default function AdminUsers() {
  const dispatch = useDispatch();

  const [userList, setUserList] = useState([]);
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    maNhom: "GP01",
    hoTen: "",
    maLoaiNguoiDung: "",
  });


  useEffect(() => {
    UserListApi();

  }, []);


  const UserListApi = async () => {

    const result = await userAdminService.fecthUserAdminApi();

    setUserList(result.data.content);
  };

  const handleSearch = async (event) => {
    const result = await userAdminService.fecthSearchUserApi(event.target.value);

    setUserList(result.data.content);
    if (event.target.value === "") {
      UserListApi();
    }
    console.log(userList);

  }


  const renderUser = () => {
    return userList.map((element, idx) => {

      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{element.taiKhoan}</td>
          <td>{element.matKhau}</td>
          <td>{element.hoTen}</td>
          <td>{element.email}</td>
          <td>{element.soDT}</td>
          <td>
            <button onClick={() => handleSelect(element)} data-toggle="modal" data-target="#myModal" ><i className="fa-solid fa-magnifying-glass" /></button>
            <button onClick={() => handleDelete(element.taiKhoan)} ><i className="fa-solid fa-trash" />
            </button>
          </td>
        </tr>
      )
    })
  };
  const handleSelect = async (element) => {
    const result = await userAdminService.fecthTakeProfileUserApi(element.taiKhoan);
    console.log(result);
    setState(result.data.content);
  };
  const handleEdit = async () => {
    console.log(state);
    const result = await userAdminService.fecthEditUserAdminApi(state);
    console.log(result);
  };
  const handleAdd = async () => {
    const result = await userAdminService.fecthAddUserAdminApi(state);
    dispatch(addUserAction(result.data.content));
    console.log(result.data.content)
    setState({
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "GP01",
      hoTen: "",
      maLoaiNguoiDung: "",
    })
  };
  const handleDelete = async (key) => {
    console.log(key);
    const result = await userAdminService.fecthDeleteUserAdminApi(key);
    console.log(result);
  }


  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  };


  return (
    <div className="card text-center">
      <div className="card-header text-left myCardHeader">
        <h3 className="text-left font-weight-bold">Quản lý Người dùng</h3>
        <button className='btn btn-info' data-toggle="modal" data-target="#myModal">
          <span>Add User</span>
        </button>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col">
            <div className="input-group">
              <input type="text" onChange={handleSearch} className="form-control" placeholder="Tìm kiếm theo tài khoản" id="searchName" />
              <div className="input-group-prepend">
                <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-hover myTable">
          <thead>
            <tr>
              <th className="nowrap">
                <span className="mr-1">STT</span>
              </th>
              <th className="nowrap">
                <span className="mr-1">Tài Khoản</span>
              </th>
              <th className="nowrap">
                <span className="mr-1">Mật khẩu</span>
              </th>
              <th>
                <span className="mr-1">Họ tên</span>
              </th>
              <th>
                <span className="mr-1">Email</span>
              </th>
              <th>
                <span className="mr-1">Số điện thoại</span>
              </th>
              <th>
                <span className="mr-1"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {renderUser()}

          </tbody>
        </table>
      </div>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0">
              <h2 id="header-title">Add User</h2>
            </header>
            <div className="modal-body">
              <form role="form">
                <div className="form-group">
                  <div className="input-group">
                    <input value={state.taiKhoan} id='taiKhoan' onChange={handleChange} type="text" name="taiKhoan" className="form-control input-sm" placeholder="Tài khoản" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">

                    <input value={state.matKhau} onChange={handleChange} type="password" name="matKhau" className="form-control input-sm" placeholder="Mật Khẩu" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input value={state.email} onChange={handleChange} type="email" name="email" className="form-control input-sm" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input value={state.soDT} onChange={handleChange} type="text" name="soDT" className="form-control input-sm" placeholder="Số điện thoại" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input value={state.maNhom} onChange={handleChange} type="text" name='maNhom' className="form-control" placeholder="Mã Nhóm" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input value={state.hoTen} onChange={handleChange} type="text" name="hoTen" className="form-control input-sm" placeholder="Họ tên" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <select value={state.maLoaiNguoiDung} onChange={handleChange} name='maLoaiNguoiDung' className="form-control">
                      <option value="">Loại người dùng</option>
                      <option value="KhachHang">Khách hàng</option>
                      <option value="QuanTri">Quản trị</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer" id="modal-footer">
              <button type="button" onClick={handleAdd} className="btn btn-success">Thêm</button>
              <button onClick={handleEdit} type="button" className="btn btn-success">Cập nhật</button>
              <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
