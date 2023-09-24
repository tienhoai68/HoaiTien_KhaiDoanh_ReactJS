import { requestApi } from "../configs/callApi";

class MovieService {
    fecthMovieListApi() {
        return requestApi({
            url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
            method: "GET",
        })
    };
    fecthMovieDetailApi(movieId) {
        return requestApi({
            url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
            method: "GET",
        })
    }
}
export const movieService = new MovieService();
