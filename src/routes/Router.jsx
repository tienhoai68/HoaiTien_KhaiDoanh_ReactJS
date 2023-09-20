import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import HomeLayout from '../layouts/HomeLayout/HomeLayout'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import MovieList from '../pages/MovieList/MovieList'
import Booking from '../pages/Booking/Booking'

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
          element: <MovieDetail />
        },
        {
          path: "/movie-list",
          element: <MovieList />
        },
        {
          path: "/booking/:bookingId",
          element: <Booking />
        }
      ]
    }
  ])
  return routing;
}
