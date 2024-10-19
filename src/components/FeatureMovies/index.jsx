import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
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
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative">
      {movies
        .filter((item) => item.id === activeMovieId)
        .map((movie) => {
          return <Movie data={movie} key={movie.id} />;
        })}

      <PaginateIndicator
        setActiveMovieId={setActiveMovieId}
        movies={movies}
        activeMovieId={activeMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
