import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector(store => store.movies);
  const {nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies} = movies;
  console.log(popularMovies,"siri7");
  
  return (
    nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Trending"} movies={topRatedMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={upcomingMovies}
          />
          <MovieList title={"Horror"} movies={topRatedMovies} />
        </div>
      </div>
    )
    
  );
}

export default SecondaryContainer