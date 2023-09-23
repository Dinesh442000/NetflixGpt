import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesion from "./GptMovieSuggesion";
import { BG_URL } from "./constans";

const GPTSearch = () => {
  return (
    <div>
      {/*GPT Serach bar GPT Movie Suggession*/}
      <div className="fixed -z-10">
        <img src={BG_URL} alt="logo"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggesion />
    </div>
  );
};

export default GPTSearch;
