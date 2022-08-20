import {API_KEY} from './constants/constants'

export const netflixOriginals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const actionGerner = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const horrorGerner = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const trendingMovieBanner = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
