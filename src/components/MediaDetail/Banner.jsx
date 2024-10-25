import { faL, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../CircularProgressBar";
import { groupBy } from "lodash";
const Banner = ({ mediaInfo }) => {
  const crews = (mediaInfo?.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  // console.log({ movieInfo });
  // console.log({ crews });
  const groupedCrews = groupBy(crews, "job");
  // console.log({ groupedCrews });
  return (
    <div className="relative text-white shadow-sm shadow-slate-800">
      {/* inset-0 để bg có thể phủ hết theo div cha: overlay */}
      {/* hoặc cho bg màu trong suốt rồi cho img z-index -1 để tạo hiệu ứng bên dưới */}
      <img
        src={`https://image.tmdb.org/t/p/original${mediaInfo?.backdrop_path}`}
        className="absolute inset-0 z-[-1] h-full w-full brightness-[0.3]"
      />
      <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        {/* chieu rong toi da 1280 */}
        {/* <div className="h-[100px] w-[100px] flex-1 md:h-[250px] md:w-[125px] lg:h-[520px] lg:w-[200px]"> */}
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/original${mediaInfo?.poster_path}`}
            // className="aspect-video"
          />
        </div>

        <div className="flex-[2] text-[1.2vw]">
          {/* 2 way responsive */}
          <p className="mb-2 text-[2vw] font-bold">{mediaInfo.title}</p>
          {/* <p className="mb-2 text-lg font-bold lg:text-2xl">Test</p> */}

          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {
                (mediaInfo?.release_dates?.results || [])
                  .find((res) => res.iso_3166_1 === "US")
                  ?.release_dates.find(
                    (releaseDate) => releaseDate.certification,
                  )?.certification
              }
            </span>
            <p>{mediaInfo.release_date}</p>
            <p>{(mediaInfo.genres || []).map((item) => item.name).join(",")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.floor(mediaInfo.vote_average || 0 * 10)}
                size={3.5}
                strokeWidth={0.3}
                strokeColor={"green"}
              />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div>
            <p className="mb-2 text-[1.3vw] font-bold">Over view</p>
            <p>{mediaInfo.overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
