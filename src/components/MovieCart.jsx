import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoriteSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { ThemeContext } from "../context/ThemeProvider";
const MovieCart = ({ media, activeTabId, id, textColor }) => {
  // const { isLight, setIsLight, isOpen } = useContext(ThemeContext);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // Sử dụng useNavigate

  const dispatch = useDispatch();

  const isFavorite = useSelector((state) =>
    state?.favorite?.some((movie) => movie.id === media.id),
  );
  const defaultBackdropPath = "/440x660.svg";
  const backdropPath = media?.backdrop_path || media?.profile_path;
  // ? media.profile_path
  // : defaultBackdropPath;
  const imageURL = backdropPath
    ? `https://media.themoviedb.org/t/p/w220_and_h330_face${backdropPath}`
    : defaultBackdropPath;
  const imageSrcSet = backdropPath
    ? `${imageURL} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${backdropPath} 2x`
    : defaultBackdropPath;
  // console.log("top rated", media.media_type);

  const addToFavorites = () => {
    dispatch(addFavorite(media)); // Thêm vào yêu thích
    // navigate("/favorites");
    alert("Đã thêm vào danh sách yêu thích!");
  };

  const removeFromFavorites = () => {
    dispatch(removeFavorite(media.id)); // Xóa khỏi yêu thích
    alert("Đã xóa khỏi danh sách yêu thích!");
  };
  // const handleFavorite = () => {
  //   const favorites = JSON.parse(localStorage.getItem("favorite") || []);
  //   const alreadyAdded = favorites.find((item) => item.id === media.id);
  //   if (!alreadyAdded) {
  //     favorites.push(media);
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //     setIsFavorite(true);
  //     alert("Đã thêm vào danh sách yêu thích");
  //   } else {
  //     alert("phim da co trong danh sach yeu thich");
  //   }
  // };

  if (!media) return null;
  return (
    <Link
      to={
        media.media_type === "tv" ? `/tv-detail/${id}` : `/movie-detail/${id}`
      }
    >
      <div className="relative overflow-hidden rounded-lg border border-slate-800">
        {/* {activeTabId === "tv" && (
          <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm text-white">
            TV Show
          </p>
        )} */}
        {media.media_type === "tv" && (
          <p className="absolute right-1 top-1 z-10 rounded bg-black p-1 text-sm text-white">
            TV Show
          </p>
        )}
        {media.media_type === "person" && (
          <p className="absolute right-1 top-1 z-10 rounded bg-black p-1 text-sm text-white">
            Person
          </p>
        )}

        <img
          loading="lazy"
          className={`w-full transition-all duration-500 ${isLoaded ? "blur-0" : "blur-sm"}`}
          onLoad={() => setIsLoaded(true)}
          src={imageURL}
          srcSet={imageSrcSet}
          // CLS web
          width={200}
          height={300}
        ></img>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            {/* <p>Loading...</p> */}
            <img src="defaultBackdropPath" srcSet={defaultBackdropPath} />
          </div>
        )}
        <div
          className="relative -top-[1.5vw] px-4"
          title={media.name || media.original_title}
        >
          <CircularProgressBar
            textColor={textColor}
            percent={
              Math.round(media.vote_average * 10) || 0
              //Math.round(media.popularity)
            }
            strokeColor={
              media.vote_average >= 7
                ? "green"
                : media.vote_average >= 5
                  ? "orange"
                  : "red"
            }
            popularity={media.popularity}
          ></CircularProgressBar>
          <p className="mt-2 truncate font-bold">
            {media.name || media.original_title}
          </p>
          <p className="text-slate-300">
            {media.first_air_date || media.release_date}
          </p>
          {/* button favorite */}
          {/* <button
            onClick={handleFavorite}
            className={`mt-2 w-full rounded bg-red-600 py-1 text-white hover:bg-red-700 ${
              isFavorite ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isFavorite}
          >
            {isFavorite ? "Đã yêu thích" : "Thêm vào yêu thích"}
          </button> */}

          {/* <button onClick={handleAddToFavorites}>Thêm vào yêu thích</button>
          <button onClick={handleRemoveFromFavorites}>
            Xóa khỏi yêu thích
          </button> */}
        </div>
      </div>
    </Link>
  );
};
export default MovieCart;

// import { Link } from "react-router-dom";
// import CircularProgressBar from "./CircularProgressBar";
// import { useState } from "react";

// const MovieCart = ({ media, activeTabId, id, textColor }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);

//   const defaultBackdropPath = "/440x660.svg";
//   const backdropPath = media?.backdrop_path || media?.profile_path;
//   const imageURL = backdropPath
//     ? `https://media.themoviedb.org/t/p/w220_and_h330_face${backdropPath}`
//     : defaultBackdropPath;

//   const handleFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     const alreadyAdded = favorites.find((item) => item.id === media.id);

//     if (!alreadyAdded) {
//       favorites.push(media);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       setIsFavorite(true);
//       alert("Đã thêm vào danh sách yêu thích!");
//     } else {
//       alert("Phim đã có trong danh sách yêu thích!");
//     }
//   };

//   if (!media) return null;

//   return (
//     <div className="relative overflow-hidden rounded-lg border border-slate-800">
//       {/* Hiển thị loại media */}
//       {media.media_type === "tv" && (
//         <p className="absolute right-1 top-1 z-10 rounded bg-black p-1 text-sm text-white">
//           TV Show
//         </p>
//       )}
//       {media.media_type === "person" && (
//         <p className="absolute right-1 top-1 z-10 rounded bg-black p-1 text-sm text-white">
//           Person
//         </p>
//       )}
//       {/* Ảnh poster */}
//       <Link
//         to={
//           media.media_type === "tv" ? `/tv-detail/${id}` : `/movie-detail/${id}`
//         }
//       >
//         <img
//           loading="lazy"
//           className={`w-full transition-all duration-500 ${isLoaded ? "blur-0" : "blur-sm"}`}
//           onLoad={() => setIsLoaded(true)}
//           src={imageURL}
//           alt={media.title || media.name}
//         />
//       </Link>
//       {/* Placeholder khi ảnh chưa tải xong */}
//       {!isLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
//           <p>Loading...</p>
//         </div>
//       )}
//       {/* Nội dung */}
//       <div className="relative -top-[1.5vw] px-4">
//         <CircularProgressBar
//           textColor={textColor}
//           percent={Math.round(media.vote_average * 10) || 0}
//           strokeColor={
//             media.vote_average >= 7
//               ? "green"
//               : media.vote_average >= 5
//                 ? "orange"
//                 : "red"
//           }
//         />
//         <p className="mt-2 truncate font-bold">
//           {media.name || media.original_title}
//         </p>
//         <p className="text-slate-300">
//           {media.first_air_date || media.release_date}
//         </p>
//         {/* Nút yêu thích */}
//         <button
//           onClick={handleFavorite}
//           className={`mt-2 w-full rounded bg-red-600 py-1 text-white hover:bg-red-700 ${
//             isFavorite ? "cursor-not-allowed opacity-50" : ""
//           }`}
//           disabled={isFavorite}
//         >
//           {isFavorite ? "Đã yêu thích" : "Thêm vào yêu thích"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieCart;
