import CircularProgressBar from "@components/CircularProgressBar";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Seasons = ({ seasons = [] }) => {
  const defaultBackdropPath = "/440x660.svg";
  console.log({ seasons });
  const [isShow, setIsShow] = useState(false);
  const displaySeasons = isShow ? seasons : seasons.slice(0, 1);
  return (
    <>
      <div className="mt-8 text-[1.3vw]">
        <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>

        <div className="space-y-4">
          {displaySeasons.map((season) => (
            <div
              key={season.id}
              className="flex items-start gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
            >
              <div className="flex-1">
                <img
                  loading="lazy"
                  src={
                    season.poster_path
                      ? `https://media.themoviedb.org/t/p/w220_and_h330_face${season.poster_path}`
                      : defaultBackdropPath
                  }
                  srcSet={
                    season.poster_path
                      ? `https://media.themoviedb.org/t/p/w220_and_h330_face${season.poster_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${season.poster_path} 2x`
                      : defaultBackdropPath
                  }
                  // CLS web

                  className="w-[1/4] rounded-lg"
                />
              </div>

              <div className="flex-[2] space-y-1">
                <p className="text-[1.4vw] font-bold">{season.name}</p>

                <div className="flex items-center gap-2">
                  <p className="font-bold">Rating</p>
                  <CircularProgressBar
                    percent={Math.round(season.vote_average * 10) || 0}
                    strokeColor={
                      season.vote_average >= 7
                        ? "green"
                        : season.vote_average >= 5
                          ? "orange"
                          : "red"
                    }
                    size={2}
                    strokeWidth={0.2}
                  />
                </div>
                <p>
                  <span className="font-bold">Release Date: </span>
                  <span>{season.air_date}</span>
                </p>
                <p>{season.episode_count} Episode</p>
                <p>{season.overview}</p>
              </div>
            </div>
          ))}

          {seasons.length > 1 && (
            <p
              className="mt-1 cursor-pointer"
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? "Show less <<<" : "Show more >>>"}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default Seasons;
