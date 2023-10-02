import { requestApi } from "../configs/callApi"

class UserService {
  loginApi(data) {
    return requestApi({
      url: "/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data,
    })
  };
  registerApi(data) {
    return requestApi({
      url: "/QuanLyNguoiDung/DangKy",
      method: "POST",
      data,
    })
  }
  fetchUserInfoApi(data) {
    return requestApi({
      url: "/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data,
    })
  }
}

export const userService = new UserService();
