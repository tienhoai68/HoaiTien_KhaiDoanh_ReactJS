import { requestApi } from "../configs/callApi";

class MovieService {
    fecthMovieListApi(key) {
        return requestApi({
            url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${key}`,
            method: "GET",
        })
    };
    fecthMovieListPageApi(page) {
        return requestApi({
            url: `/QuanLyPhim/LayDanhSachPhimPhanTrang?soTrang=${page}`,
            method: "GET",
        })
    };
    fecthMovieDetailApi(movieId) {
        return requestApi({
            url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
            method: "GET",
        })
    };
    fetchMovieBannerApi() {
        return requestApi({
            url: "/QuanLyPhim/LayDanhSachBanner",
            method: "GET",
        })
    }
}
export const movieService = new MovieService();
