import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath,"siro99");
    
  return (
    <div className='px-4 w-48'>
    <img src={IMG_CDN_URL + posterPath} alt="Logo" />
    </div>
  )
}

export default MovieCard