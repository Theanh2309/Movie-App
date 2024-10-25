import FeatureMovies from "../components/FeatureMovies";
import Header from "../components/Header";
import MediaList from "../components/MediaList";
import { TOP_RATED_TAB, TRENDING_TABS } from "../libs/constants";
function HomePage() {
  return (
    <>
      <div>
        {/* <Test2 /> */}
        {/* <Header /> */}
        <FeatureMovies />
        <MediaList title="Trending" tabs={TRENDING_TABS} />
        <MediaList title="Top Rated" tabs={TOP_RATED_TAB} />

        <div></div>
      </div>
    </>
  );
}

export default HomePage;
