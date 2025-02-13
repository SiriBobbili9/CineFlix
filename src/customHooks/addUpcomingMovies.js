
import { useDispatch } from "react-redux";
import { addTopratedMovies, addUpcomingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  const getUpcomingMovies  =async () => {
    const data =await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json?.results,"siri2")
    dispatch(addUpcomingMovies(json?.results)); 
  }
  useEffect(() => {
    getUpcomingMovies()
  },[])
}
export default useUpcomingMovies