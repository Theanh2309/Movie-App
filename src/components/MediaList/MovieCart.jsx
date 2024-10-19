import CircularProgressBar from "./CircularProgressBar";

const MovieCart = ({ media, activeTabId }) => {
  const defaultBackdropPath = "/wUXStXplgczaKcZfAgQ55dGKAoP.jpg";
  const backdropPath = media?.backdrop_path
    ? media.backdrop_path
    : media.profile_path
      ? media.profile_path
      : defaultBackdropPath;

  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-800">
      {/* media.media_type === "tv"*/}
      {activeTabId === "tv" && (
        <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm text-white">
          TV Show
        </p>
      )}
      <img
        loading="lazy"
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${backdropPath}`}
        srcSet={`https://media.themoviedb.org/t/p/w220_and_h330_face${backdropPath} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${backdropPath} 2x`}
      ></img>
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressBar
          percent={Math.round(media.vote_average * 10) || 0}
          strokeColor={
            media.vote_average >= 7
              ? "green"
              : media.vote_average >= 5
                ? "orange"
                : "red"
          }
        ></CircularProgressBar>
        <p className="mt-2 font-bold">{media.name || media.original_title}</p>
        <p className="text-slate-300">
          {media.first_air_date || media.release_date}
        </p>
      </div>
    </div>
  );
};
export default MovieCart;
