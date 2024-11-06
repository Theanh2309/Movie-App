import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useCallback, useEffect, useState } from "react";
import Loading from "../Loading";
import useFetch from "@hooks/useFetch.";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const preloadImages = useCallback((movies) => {
    let loadedCount = 0;
    movies.forEach((movie) => {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === movies.length) {
          setImagesLoaded(true); // Khi tất cả ảnh đã được load
        }
      };
    });
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
      },
    });
    const data = await res.json();
    const popularMovies = data.results.slice(0, 4);
    // alt + mui ten len: di chuyen code (move line up)
    setMovies(popularMovies);
    setActiveMovieId(popularMovies[0].id);
    preloadImages(popularMovies); // Preload ảnh khi đã có dữ liệu phim
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { data: videoInfo } = useFetch(
    {
      url: activeMovieId ? `/movie/${activeMovieId}/videos` : null,
    },
    // convert boolean
    { enabled: !!activeMovieId },
  );

  return (
    // <div className="relative">
    //   {movies
    //     .filter((item) => item.id === activeMovieId)
    //     .map((movie) => {
    //       return <Movie data={movie} key={movie.id} />;
    //     })}

    //   <PaginateIndicator
    //     setActiveMovieId={setActiveMovieId}
    //     movies={movies}
    //     activeMovieId={activeMovieId}
    //   />
    // </div>

    <div className="relative">
      {!imagesLoaded ? (
        <Loading />
      ) : (
        movies
          .filter((item) => item.id === activeMovieId)
          .map((movie) => {
            return (
              <Movie
                data={movie}
                key={movie.id}
                trailerVideoKey={
                  videoInfo?.results?.find((video) => video.type === "Trailer")
                    .key || ""
                }
              />
            );
          })
      )}

      <PaginateIndicator
        setActiveMovieId={setActiveMovieId}
        movies={movies}
        activeMovieId={activeMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
