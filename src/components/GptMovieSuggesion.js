import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggesion = () => {
  const { gptMovieNamesSpecific, gptMovies } = useSelector(
    (store) => store.gpt
  );
  if (!gptMovieNamesSpecific) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        <h1>{gptMovieNamesSpecific[0]}</h1>

        {gptMovieNamesSpecific.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggesion;
