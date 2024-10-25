import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  const [imagesLoaded, setImagesLoaded] = useState(false); // Trạng thái kiểm tra ảnh đã load xong chưa
  const preloadImages = (movies) => {
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
  };

  const fetchData = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDJiMjUyODE4NGNmMjcyZjk5YjBiZGFlZGUxMjIxNSIsIm5iZiI6MTcyODk3MjU1NS41MDYyOTMsInN1YiI6IjY3MGUwMTJhZDVmOTNhM2RhMGJjMWQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xq12AQi2QBGT5M16-zGiFwQZvFGzdNhGcZMQfST9_TI`,
        // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
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
      {!imagesLoaded ? ( // Kiểm tra nếu ảnh chưa load, hiện thông báo hoặc skeleton
        <Loading />
      ) : (
        movies
          .filter((item) => item.id === activeMovieId)
          .map((movie) => {
            return <Movie data={movie} key={movie.id} />;
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
