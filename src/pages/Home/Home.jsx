import React from 'react';
import "./Home.scss"
import TabCinema from './TabCinema/TabCinema';
import SlickMovie from './SlickMovie/SlickMovie';
import ListMoviePage from './ListMoviePage/ListMoviePage';

export default function Home() {
  return (
    <div>
      <div>
        <ListMoviePage />
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
