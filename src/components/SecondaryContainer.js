import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.nowPlayingMovies);
  return (
    <div>
      {/*
      Movie List- Popular
        MovieCard-n
      Movie List- Now Playing
      Movie List- Trending
      Movie List- Horror
      */}
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
