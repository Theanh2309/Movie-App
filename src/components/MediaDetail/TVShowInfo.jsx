import { currencyFormatter } from "@libs/utils";

const TVShowInfo = ({ tvShowInfo }) => {
  console.log({ tvShowInfo });
  return (
    <>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvShowInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p>
          {(tvShowInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/96x72/${countryCode.toLowerCase()}.png 2x,https://flagcdn.com/144x108/${countryCode.toLowerCase()}.png 3x`}
              className="mr-1 mt-1 w-[1.6vw]"

              //  flagcdn
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvShowInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        <p>
          {tvShowInfo?.networks?.map((nt) => (
            <img
              className="invert"
              key={nt.id}
              src={`https://media.themoviedb.org/t/p/h30/${nt.logo_path}`}
            />
          ))}
        </p>
      </div>
    </>
  );
};
export default TVShowInfo;
