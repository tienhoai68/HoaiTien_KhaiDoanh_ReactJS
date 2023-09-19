import React from 'react'
import "./scss/Intro.scss"
import "./scss/IntroReponsive.scss"

export default function IntroHeader() {
    return (
        <div className='page-header'>
            <div className='page-header-container container'>
                <nav className="">
                    <a className="navbar-brand logo" href="#">
                        <img className='cinima-ticket' src="././img/film-movie.png" alt="logo" />
                    </a>

                    <div className='header-search'>
                        <div className='header-search-left'>
                            <p className='kenhcine'>
                                <img src="././img/kenhcine.gif" alt="kên cine" />
                            </p>
                        </div>
                        <div className='header-search-right'>
                            <p>
                                <a href="">
                                    <img style={{ height: 104 }} src="././img/the-cinema.png" alt="mua-ve" />
                                </a>
                            </p>
                        </div>
                    </div>
                </nav>




            </div>
        </div>
    )
}
