import React from 'react'
import './banner.css'
import { useEffect, useState } from 'react';
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import {trendingMovieBanner} from '../../Urls'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {

    axios.get(trendingMovieBanner).then((response) => {
      setMovie(response.data.results[1])
    })
  }, [])
  return (

    <div 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path  : ""})`}}
    className='banner'>
        <div className="contents">
            <h1 className='title'>{movie ? movie.original_name : ''}</h1>
            <div className="banner-btns">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1> 
        </div>
        <div className="fade-bottom">
        
        </div>
    </div>
  )
}

export default Banner