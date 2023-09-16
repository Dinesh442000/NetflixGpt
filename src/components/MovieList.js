import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(title);
  // console.log(movies);
  return (
    <div className="px-6">
      <h1 className="py-4 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies != null
            ? movies.map((movie) => (
                <MovieCard key={movie.id} poster_path={movie.poster_path} />
              ))
            : console.log(null)}
          {/*movies.map((movie) => console.log(movie))*/}
          {/*movies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))*/}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
