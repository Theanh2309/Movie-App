import React, { useEffect, useState } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  // const movieIds = movies.map((movie) => movie.id);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveMovieId((prevId) => {
  //       console.log({ prevId });
  //       const currentIndex = movieIds.indexOf(prevId);
  //       const nextIndex = (currentIndex + 1) % movieIds.length;
  //       return movieIds[nextIndex];
  //     });
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [movieIds]);

  return (
    <>
      <div className="absolute bottom-[10%] right-8">
        <ul className="flex gap-1">
          {movies.map((item) => {
            return (
              <li
                onClick={() => setActiveMovieId(item.id)}
                key={item.id}
                className={`h-1 w-6 cursor-pointer rounded ${item.id === activeMovieId ? "bg-slate-50" : "bg-slate-600"}`}
              ></li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PaginateIndicator;
