import React from 'react';
import "./Home.scss"
import TabCinema from './TabCinema/TabCinema';
import MovieList from './MovieList/MovieList';
import SlickMovie from './SlickMovie/SlickMovie';

export default function Home() {
  return (
    <div>
      <div>
        <MovieList />
      </div>
      <div>
        <SlickMovie />
      </div>
      <div>
        <TabCinema />
      </div>
    </div>
  )
}
