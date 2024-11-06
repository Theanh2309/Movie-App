import Loading from "@components/Loading";
import MovieCart from "@components/MovieCart";

const RelatedMediaList = ({
  mediaList,
  isLoading,
  title,
  className = "mt-6",
  textColor,
}) => {
  return (
    <div className={className}>
      {title && <p className="mb-4 text-[1.4vw] font-bold">{title}</p>}
      {isLoading && <Loading />}
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCart
            key={media.id}
            media={media}
            id={media.id}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
};
export default RelatedMediaList;
