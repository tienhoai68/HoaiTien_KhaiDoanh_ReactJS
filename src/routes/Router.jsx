import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Booking from "../pages/Booking/Booking";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import AdminHome from "../pages/AdminHome/AdminHome";
import AdminUsers from "../pages/AdminUser/AdminUsers";
import AdminFilm from "../pages/AdminFilm/AdminFilm";
import AddnewFilm from "../pages/AdminFilmAddnew/AddnewFilm";
import EditFilm from "../pages/AdminFilmEdit/EditFilm";
import Login from "../components/Login/Login";
import AuthGuard from "../guards/AuthGuard";
import NoAuthGuard from "../guards/NoAuthGuard";
import MovieList from "../pages/MovieList/MovieList";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AddFilm from "../pages/AdminFilmAddnew/AddFilm";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie-detail/:movieId",
          element: <MovieDetail />,
        },
        {
          path: "/movie-list",
          element: <MovieList />,
        },
        {
          path: "/booking/:bookingId",
          element: (
            <AuthGuard>
              <Booking />
            </AuthGuard>
          ),
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <AdminHome />,
        },
        {
          path: "/admin/user",
          element: <AdminUsers />,
        },
        {
          path: "/admin/films",
          element: <AdminFilm />,
        },
        {
          path: "/admin/films/addnew",
          // element: <AddnewFilm />,
          element: <AddFilm />,
        },
        {
          path: "/admin/films/edit/:filmId",
          element: <EditFilm />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <NoAuthGuard>
          <Login />
        </NoAuthGuard>
      ),
    },
  ]);
  return routing;
}
