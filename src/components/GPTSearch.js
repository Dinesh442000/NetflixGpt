import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesion from "./GptMovieSuggesion";
import { BG_URL } from "./constans";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggesion />
      </div>
    </>
  );
};

export default GPTSearch;
