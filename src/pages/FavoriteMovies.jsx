// import MovieCart from "@components/MovieCart";
// import { useState, useEffect } from "react";
// // import MovieCart from "./MovieCart";

// const FavoriteMovies = () => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   if (!favorites.length) {
//     return (
//       <div className="p-4 text-center text-white">
//         <p>Danh sách yêu thích của bạn đang trống!</p>
//       </div>
//     );
//   }
//   const removeFavorite = (movieId) => {
//     const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="mb-6 text-center text-2xl font-bold text-white">
//         Danh sách yêu thích
//       </h1>
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
//         {favorites.map((movie) => (
//           <div key={movie.id} className="relative">
//             <MovieCart media={movie} id={movie.id} />
//             <button
//               onClick={() => removeFavorite(movie.id)}
//               className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-sm text-white hover:bg-red-700"
//             >
//               Xóa
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavoriteMovies;
import { useSelector, useDispatch } from "react-redux";
import MovieCart from "@components/MovieCart";
import { removeFavorite } from "../redux/favoriteSlice";
const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch(); // Khởi tạo useDispatch

  if (!favorites.length) {
    return (
      <div className="p-4 text-center text-white">
        <p>Danh sách yêu thích của bạn đang trống!</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black">
      <div className="p-4">
        {/* <h1 className="mb-6 text-center text-2xl font-bold text-red-700">
          Danh sách yêu thích
        </h1> */}
        <div className="grid grid-cols-2 gap-4 text-white sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {favorites.map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCart media={movie} id={movie.id} />
              <button
                onClick={() => dispatch(removeFavorite(movie.id))}
                className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-sm text-white hover:bg-red-700"
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteMovies;
