import React from 'react';
import "./Home.scss"
import TabCinema from './TabCinema/TabCinema';
import MovieList from './MovieList/MovieList';

export default function Home() {
  return (
    <div>
      <div>
        <MovieList />
      </div>
      <div>
        <TabCinema />
      </div>
    </div>
  )
}
