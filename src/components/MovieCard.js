import React from "react";
import { IMG_CDN_URL } from "./constans";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_CDN_URL + poster_path} alt="" />
    </div>
  );
};

export default MovieCard;
