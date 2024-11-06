import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch.";
import { useState } from "react";

const Search = () => {
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "all",
  });

  const arr =
    searchFormValues?.rating === "all"
      ? [0, 100]
      : searchFormValues.rating.split(" - ");

  const [minRating, maxRating] = arr;
  const { data, isLoading } = useFetch({
    url: searchFormValues.mediaType
      ? `/discover/${searchFormValues.mediaType}?sort_by:popularity.desc&with_genres=${searchFormValues.genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`
      : null,
  });
  return (
    <div className="container flex flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValues={setSearchFormValues} />
        </div>
        <div className="flex-[3]">
          {/* <RelatedMediaList
            mediaList={data?.results || []}
            className="mt-0"
            textColor="text-black"
          /> */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <RelatedMediaList
              mediaList={data?.results || []}
              className="mt-0"
              textColor="text-black"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
