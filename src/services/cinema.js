import { requestApi } from "../configs/callApi";

class CinemaService {
  fecthShowTimeApi(movieId) {
    return requestApi({
      url: `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
      method: "GET",
    })
  };
}

export const cinemaService = new CinemaService();
