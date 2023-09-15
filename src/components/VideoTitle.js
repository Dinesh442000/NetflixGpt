import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-slate-800">
      <h1 className=" text-6xl font-bold"> {title} </h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="text-black bg-white rounded-lg p-4 px-12 h-30 text-xl hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-10 text-black bg-white rounded-lg p-4 px-12 h-30 text-xl hover:bg-opacity-80">
          ❕ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
