import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../CircularProgressBar";
import { groupBy, _ } from "lodash";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalProvider";
const Banner = ({
  mediaInfo,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
  const { openPopup } = useContext(ModalContext);

  console.log({ mediaInfo });
  const crews = (mediaInfo?.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  // console.log({ crews });
  // const crewTvShow = (mediaInfo?.aggregate_credits?.crew || []).filter(
  //   (crew) => {
  //     const jobs = crew.jobs.map((job) => job.job);
  //     return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
  //   },
  // );
  // Lọc những người có job là Director hoặc Writer
  const filteredCrew = mediaInfo?.aggregate_credits?.crew?.filter(
    (crewMember) =>
      crewMember.jobs &&
      crewMember.jobs.some(
        (job) => job.job === "Director" || job.job === "Writer",
      ),
  );

  // Nhóm các thành viên crew theo job (Director, Writer)
  const groupedCrew = _.groupBy(filteredCrew, (crewMember) => {
    return crewMember.jobs.find(
      (job) => job.job === "Director" || job.job === "Writer",
    ).job;
  });
  const groupedCrews = groupBy(crews, "job");
  // console.log({ groupedCrews });
  const [isLoaded, setIsLoaded] = useState(false);

  const trailerVideoKey = mediaInfo?.videos?.results?.find(
    (video) => video.type === "Trailer",
  )?.key;

  console.log({ mediaInfo });

  return (
    <div className="relative text-white shadow-sm shadow-slate-800">
      {/* inset-0 để bg có thể phủ hết theo div cha: overlay */}
      {/* hoặc cho bg màu trong suốt rồi cho img z-index -1 để tạo hiệu ứng bên dưới */}
      <img
        src={`https://image.tmdb.org/t/p/original${mediaInfo?.backdrop_path}`}
        className="absolute inset-0 z-[-1] h-[100%] w-full brightness-[0.3]"
      />

      <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        {/* chieu rong toi da 1280 */}
        {/* <div className="h-[100px] w-[100px] flex-1 md:h-[250px] md:w-[125px] lg:h-[520px] lg:w-[200px]"> */}
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/original${mediaInfo?.poster_path}`}
            // className="aspect-video"
            width={300}
            height={600}
            className={`w-full transition-all duration-500 ${isLoaded ? "blur-0" : "blur-lg"}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <div className="flex-[2] text-[1.2vw]">
          {/* 2 way responsive */}
          <p className="mb-2 text-[2vw] font-bold">
            {mediaInfo.name || mediaInfo.title}
          </p>
          {/* <p className="mb-2 text-lg font-bold lg:text-2xl">Test</p> */}

          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {
                (mediaInfo?.release_dates?.results || [])
                  ?.find((res) => res.iso_3166_1 === "US")
                  ?.release_dates.find(
                    (releaseDate) => releaseDate.certification,
                  )?.certification
              }

              {
                (mediaInfo?.content_ratings?.results || []).find(
                  (res) => res.iso_3166_1 === "US",
                )?.rating
              }
            </span>
            <p>{mediaInfo.release_date || mediaInfo.first_air_date}</p>
            <p>{(mediaInfo.genres || []).map((item) => item.name).join(",")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.floor((mediaInfo.vote_average || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
                strokeColor={
                  mediaInfo.vote_average >= 7
                    ? "green"
                    : mediaInfo.vote_average >= 5
                      ? "orange"
                      : "red"
                }
              />
              Rating
            </div>
            <button
              className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg"
              onClick={() => {
                // setIsShowing(true);
                // setContent(
                //   <iframe
                //     className="aspect-video w-[50vw]"
                //     src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                //     title="Trailer"
                //   ></iframe>,
                // );
                openPopup(
                  <iframe
                    className="aspect-video w-[50vw]"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    title="Trailer"
                  ></iframe>,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" />

              <span>Trailer</span>
            </button>
            <button
              onClick={isFavorite ? removeFromFavorites : addToFavorites}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-500 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faHeart} />
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
            {/* <div className="flex justify-between"> */}
            {/* Hiển thị danh sách Director */}

            <div>
              <p>Directors: </p>
              {(groupedCrew["Director"] || [])
                .slice(0, 10)
                .map((director, index, array) => (
                  <span key={index}>
                    {director.name}
                    {index < array.length - 1 && ", "}
                    {/* {director.name.map((crew) => crew.name).join(", ")} */}
                  </span>
                ))}
            </div>

            {/* Hiển thị danh sách Writer */}

            <div>
              <p>Writers:</p>
              {(groupedCrew["Writer"] || [])
                .slice(0, 10)
                .map((writer, index) => (
                  <span key={index}>{writer.name}</span>
                ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
