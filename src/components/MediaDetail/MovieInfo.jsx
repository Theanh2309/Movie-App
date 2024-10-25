import { currencyFormatter } from "@libs/utils";

const MovieInfo = ({ movieInfo }) => {
  console.log({ movieInfo });
  return (
    <>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{movieInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p>
          {(movieInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              srcset={`https://flagcdn.com/96x72/${countryCode.toLowerCase()}.png 2x,https://flagcdn.com/144x108/${countryCode.toLowerCase()}.png 3x`}
              className="mr-1 mt-1 w-[1.6vw]"

              //  flagcdn
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(movieInfo.budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(movieInfo.revenue)}</p>
      </div>
    </>
  );
};
export default MovieInfo;
