import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieInfo from "@components/MediaDetail/MovieInfo";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [relatedMovie, setRelatedMovie] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  // const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
  //   useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDJiMjUyODE4NGNmMjcyZjk5YjBiZGFlZGUxMjIxNSIsIm5iZiI6MTcyODk3MjU1NS41MDYyOTMsInN1YiI6IjY3MGUwMTJhZDVmOTNhM2RhMGJjMWQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xq12AQi2QBGT5M16-zGiFwQZvFGzdNhGcZMQfST9_TI`,
          // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      },
    );
    const data = await res.json();
    setMovieInfo(data);
    setIsLoading(false);
  };

  const fetchDataRelated = async () => {
    // setIsRelatedMovieListLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDJiMjUyODE4NGNmMjcyZjk5YjBiZGFlZGUxMjIxNSIsIm5iZiI6MTcyODk3MjU1NS41MDYyOTMsInN1YiI6IjY3MGUwMTJhZDVmOTNhM2RhMGJjMWQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xq12AQi2QBGT5M16-zGiFwQZvFGzdNhGcZMQfST9_TI`,
          // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      },
    );
    const data = await res.json();
    // console.log({ data });
    const currentRelatedMovies = data.results.slice(0, 12);
    console.log({ currentRelatedMovies });
    setRelatedMovie(currentRelatedMovies);
    // setIsRelatedMovieListLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    fetchDataRelated();
  }, [id]);

  if (isLoading) {
    return (
      <p>
        <div
          role="status"
          class="flex h-full w-full animate-pulse rounded border border-gray-200 p-4 shadow md:p-6 dark:border-gray-700"
        >
          <div class="mb-4 flex h-[50vh] flex-1 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <svg
              class="h-10 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="ml-4 flex-[2]">
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>{" "}
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>{" "}
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>{" "}
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <svg
              class="dark:text-gray mb-3 me-3 h-10 w-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mt-4 flex items-center"></div>
            <div>
              <div class="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div class="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </p>
    );
  }
  return (
    <>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movieInfo?.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMovie || []} />
          </div>
          <div className="flex-1">
            <MovieInfo movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetail;