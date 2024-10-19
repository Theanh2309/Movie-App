import { useEffect, useState } from "react";
import MovieCart from "./MovieCart";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  console.log(activeTabId);
  const url = tabs.find((tab) => tab.id === activeTabId)?.url;
  const fetchData = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
        // Authorization:
        //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDJiMjUyODE4NGNmMjcyZjk5YjBiZGFlZGUxMjIxNSIsIm5iZiI6MTcyOTA1NTEwMS4zMTU3MzgsInN1YiI6IjY3MGUwMTJhZDVmOTNhM2RhMGJjMWQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zcoUZCQgP4ro24BqMu2xMnSslW3TS8a5aUHv2ifS-_g",
      },
    });
    console.log(import.meta.env.VITE_API_KEY);
    const data = await res.json();
    // console.log(data);
    const trendingMediaList = data.results.slice(7, 19);
    console.log({ trendingMediaList });
    setMediaList(trendingMediaList);
    // setActiveMovieId(popularMovies[0].id);
  };
  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [activeTabId]);
  console.log(mediaList);
  return (
    <>
      <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
        <div className="mb-6 flex items-center gap-4">
          <p className="text-[2vw] font-bold">{title}</p>
          <ul className="flex rounded border border-white">
            {tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className={`cursor-pointer rounded ${tab.id === activeTabId ? "bg-white text-black" : ""} px-2 py-1`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {mediaList.map((item) => {
            return (
              <MovieCart key={item.id} media={item} activeTabId={activeTabId} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MediaList;
