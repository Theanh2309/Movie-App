import { useContext, useEffect, useState } from "react";
import MovieCart from "@components/MovieCart";
// import { ThemeContext } from "../../context/ThemeProvider";
const MediaList = ({ title, tabs = [] }) => {
  // const { isLight, setIsLight, isOpen } = useContext(ThemeContext);
  const initialTabId = localStorage.getItem("activeTabId") || tabs[0]?.id;
  const [mediaList, setMediaList] = useState([]);
  // const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const [activeTabId, setActiveTabId] = useState(initialTabId);

  // console.log(activeTabId);
  const url = tabs.find((tab) => tab.id === activeTabId)?.url;
  // console.log(url);
  const fetchData = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
      },
    });
    // console.log(import.meta.env.VITE_API_KEY);
    const data = await res.json();
    // console.log(data);
    const trendingMediaList = data.results.slice(0, 18);
    // console.log({ trendingMediaList });
    setMediaList(trendingMediaList);
    // setActiveMovieId(popularMovies[0].id);

    console.log("TOP RATED", mediaList);
  };
  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [activeTabId]);

  // useEffect(() => {
  //   localStorage.setItem("activeTabId", activeTabId);
  // }, [activeTabId]);

  useEffect(() => {
    if (title === "Top Rated") {
      setActiveTabId(tabs[0]?.id);
    }
  }, [tabs]);

  console.log(mediaList);
  return (
    <>
      {/* <div className="bg-black px-8 py-10 text-[1.2vw] text-white"> */}
      <div
        className={`bg-black px-8 py-10 text-[1.2vw] text-white`}
        // className={`${isOpen && isLight} bg-black px-8 py-10 text-[1.2vw] text-white`}
      >
        <div className="mb-6 flex items-center gap-4">
          <p className="text-[2vw] font-bold">{title}</p>
          <ul className="flex rounded border border-white">
            {tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className={`cursor-pointer rounded ${tab.id === activeTabId ? "bg-white text-black" : ""} px-2 py-1`}
                  onClick={() => {
                    setActiveTabId(tab.id);
                    localStorage.setItem("activeTabId", tab.id);
                  }}
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
              <MovieCart
                key={item.id}
                media={item}
                activeTabId={activeTabId}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MediaList;
