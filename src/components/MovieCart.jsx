import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";

const MovieCart = ({ media, activeTabId, id }) => {
  const defaultBackdropPath = "/440x660.svg";
  const backdropPath = media?.backdrop_path
    ? media.backdrop_path
    : media.profile_path;
  // ? media.profile_path
  // : defaultBackdropPath;

  return (
    <Link to={`/movie-detail/${id}`}>
      <div className="relative overflow-hidden rounded-lg border border-slate-800">
        {/* media.media_type === "tv"*/}
        {activeTabId === "tv" && (
          <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm text-white">
            TV Show
          </p>
        )}
        {media.media_type === "person" && (
          <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm text-white">
            Person
          </p>
        )}

        <img
          loading="lazy"
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
        ></img>
        <div
          className="relative -top-[1.5vw] px-4"
          title={media.name || media.original_title}
        >
          <CircularProgressBar
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
