import React, { useEffect, useState } from 'react'
import './row-post.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [trailerKey, setTrailerKey] = useState()

  useEffect(() => {
    axios.get(props.url).then((responce) => {
      setMovies(responce.data.results)
    })
  },[])

  const rowClassName = props.isNetflixOriginals !== true ? "genreRow" : "netflixOriginalsRow";
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  function handleMovieTrailer(id) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      if (res.data.results[0]) {
        setTrailerKey(res.data.results[0].key)
      } else {
        console.log('currently unavilable')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
        <div className='posters'>
      {
        movies.map((obj, index) => {
          return (

            <div className={rowClassName} id='rowPosters' key={index}>
              <img onClick={() => handleMovieTrailer(obj.id)}  src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
            </div>

          )
        })
      }
      </div>
      {trailerKey && <YouTube videoId={trailerKey} opts={opts} />}
    </div>
  )
}

export default RowPost