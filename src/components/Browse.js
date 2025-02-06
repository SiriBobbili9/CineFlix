import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../store/movieSlice'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useTopRatedMovies from '../customHooks/useTopRatedMovies'
import useUpcomingMovies from '../customHooks/addUpcomingMovies'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()


  return (
    <div>
    <Header />
    <MainContainer />
    <SecondaryContainer />
     {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
    </div>
  )
}

export default Browse