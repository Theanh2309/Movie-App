import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import { useState, useContext } from "react";
// import { ThemeContext } from "../context/ThemeProvider";
const MovieCart = ({ media, activeTabId, id, textColor }) => {
  // const { isLight, setIsLight, isOpen } = useContext(ThemeContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const defaultBackdropPath = "/440x660.svg";
  const backdropPath = media?.backdrop_path
    ? media.backdrop_path
    : media.profile_path;
  // ? media.profile_path
  // : defaultBackdropPath;

  // console.log("top rated", media.media_type);
  return (
    <Link
      to={
        media.media_type === "tv" ? `/tv-detail/${id}` : `/movie-detail/${id}`
      }
    >
      <div className="relative overflow-hidden rounded-lg border border-slate-800">
        {/* {activeTabId === "tv" && (
          <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm text-white">
            TV Show
          </p>
        )} */}
        {media.media_type === "tv" && (
          <p className="absolute right-1 top-1 z-10 rounded bg-black p-1 text-sm text-white">
            TV Show
          </p>
        )}
        {media.media_type === "person" && (
          <p className="absolute right-1 top-1 z-10 rounded bg-black p-1 text-sm text-white">
            Person
          </p>
        )}

        <img
          loading="lazy"
          className={`w-full transition-all duration-500 ${isLoaded ? "blur-0" : "blur-"}`}
          onLoad={() => setIsLoaded(true)}
          src={
            backdropPath
              ? `https://media.themoviedb.org/t/p/w220_and_h330_face${backdropPath}`
              : defaultBackdropPath
          }
          srcSet={
            backdropPath
              ? `https://media.themoviedb.org/t/p/w220_and_h330_face${backdropPath} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${backdropPath} 2x`
              : defaultBackdropPath
          }
          // CLS web
          width={200}
          height={300}
        ></img>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            {/* <p>Loading...</p> */}
            <img src="defaultBackdropPath" srcSet={defaultBackdropPath} />
          </div>
        )}
        <div
          className="relative -top-[1.5vw] px-4"
          title={media.name || media.original_title}
        >
          <CircularProgressBar
            textColor={textColor}
            percent={
              Math.round(media.vote_average * 10) || 0
              //Math.round(media.popularity)
            }
            strokeColor={
              media.vote_average >= 7
                ? "green"
                : media.vote_average >= 5
                  ? "orange"
                  : "red"
            }
            popularity={media.popularity}
          ></CircularProgressBar>
          <p className="mt-2 truncate font-bold">
            {media.name || media.original_title}
          </p>
          <p className="text-slate-300">
            {media.first_air_date || media.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCart;
