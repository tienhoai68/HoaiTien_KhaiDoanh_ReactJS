import React from 'react';
import "./Home.scss"
import TabCinema from './TabCinema/TabCinema';
import SlickMovie from './SlickMovie/SlickMovie';
import ListMoviePage from './ListMoviePage/ListMoviePage';
import Newsletter from './Newsletter/Newsletter';
import Banner from './Banner/Banner';

export default function Home() {
  return (
    <div>
      <div>
        <Banner/>
      </div>
      <div>
        <ListMoviePage />
      </div>
      <div>
        <SlickMovie />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <TabCinema />
      </div>
    </div>
  )
}
