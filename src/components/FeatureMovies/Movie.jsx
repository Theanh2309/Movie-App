import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalProvider";
import useFetch from "@hooks/useFetch.";
import { Link } from "react-router-dom";
const Movie = ({ data, trailerVideoKey }) => {
  // const { setIsShowing, setContent } = useContext(ModalContext);
  const { openPopup } = useContext(ModalContext);
  if (!data) return null;
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        className="aspect-video w-full brightness-50"
        alt={data?.title || "Movie Image"}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 text-white sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{data?.title}</p>
        {/* text chiem 2% vw => hien thi size text theo chieu ngang man hinh*/}
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <span className="block text-[1.2vw]">{data?.release_date}</span>
        </div>
        <div>
          {/* display: none <=> display:block */}
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-1 font-bold">Overview</p>
            <p>{data?.overview}</p>
          </div>
          <div className="mt-4">
            <button
              className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg"
              onClick={() => {
                if (trailerVideoKey) {
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
                } else {
                  alert("Trailer not available");
                }
              }}
            >
              {/* <button className="rounded bg-white px-4 py-2 text-[2vw] text-black"> */}
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            {/* bg-slate-300/35: background trong suot ko dac(no solid) */}
            <Link to={`/movie-detail/${data.id}`}>
              {" "}
              <button className="rounded bg-slate-300/35 px-4 py-2 text-10 hover:bg-slate-300 hover:text-black lg:text-lg">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
