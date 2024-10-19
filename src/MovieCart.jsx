import CircularProgressBar from "./CircularProgressBar";

const MovieCart = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-800">
      <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/fj1ywGV5k8D0qjXyVeEgNyksChq.jpg" />
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressBar />
        <p className="mt-2 font-bold">Loremmmmmmmmmmmlorem</p>
        <p className="text-slate-300">2024</p>
      </div>
    </div>
  );
};
export default MovieCart;
