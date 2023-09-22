import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "./constans";
import { addGptMoviesResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const getlang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and show results for above query : " +
      searchText.current.value +
      " .Show results for only 5 movies names separated by comma without numbering take above example. Example : Gadar, Prem, Dhadak, Pink, Sholye";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    //console.log(gptResults.choices);
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    //console.log(gptMovies);
    //for each movie search tmdb api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    console.log(promiseArray);

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMoviesResults({
        gptMovieNamesSpecific: gptMovies,
        gptMovies: tmdbResults,
      })
    );
  };
  //console.log(getlang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang?.[getlang].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang?.[getlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
