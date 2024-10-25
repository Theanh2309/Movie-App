const ActorInfo = ({ actor }) => {
  console.log({ actor });
  const defaultPathImageActor = "/440x660.svg";
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-black shadow-sm">
      {/* ?placehold img */}
      <img
        loading="lazy"
        src={
          actor.profile_path
            ? `https://media.themoviedb.org/t/p//w276_and_h350_face${actor.profile_path}`
            : `${defaultPathImageActor}`
        }
        srcSet={
          actor.profile_path
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${actor.profile_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${actor.profile_path} 2x`
            : defaultPathImageActor
        }
      />
      {/* <img src="/bg.jpg" /> */}

      <div className="p-3">
        <p className="font-bold">{actor.name}</p>
        <p>{actor.character}</p>
        {/* <p> 18 tap xuat hien</p> */}
      </div>
    </div>
  );
};
export default ActorInfo;
