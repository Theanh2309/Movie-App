import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { GENDER_MAPPING } from "@libs/constants";
import { useLoaderData } from "react-router-dom";

const PeoplePage = () => {
  const peopleInfo = useLoaderData();
  const defaultPathImageActor = "/ActorNoImage.svg";
  console.log({
    peopleInfo,
  });
  return (
    <div className="bg-black text-[1.2vw] text-white">
      <div className="container">
        <div className="flex gap-6">
          <div className="flex-[1]">
            <img
              loading="lazy"
              src={
                peopleInfo.profile_path
                  ? `https://media.themoviedb.org/t/p//w276_and_h350_face${peopleInfo.profile_path}`
                  : `${defaultPathImageActor}`
              }
              srcSet={
                peopleInfo.profile_path
                  ? `https://media.themoviedb.org/t/p/w276_and_h350_face${peopleInfo.profile_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${peopleInfo.profile_path} 2x`
                  : defaultPathImageActor
              }
              width={600}
              height={900}
              className="mb-6 rounded-lg"
            />
            <div>
              <p className="mb-6 text-[1.3vw] font-bold">Personal Info</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Know For</p>
                  <p>{peopleInfo.known_for_department}</p>
                </div>
                <div>
                  <p className="font-bold">Gender</p>
                  <p>{GENDER_MAPPING[peopleInfo.gender]}</p>
                </div>

                <div>
                  <p className="font-bold">Place off Birth</p>
                  <p>{peopleInfo.place_of_birth}</p>
                </div>
                <div>
                  <p className="font-bold">Birthday</p>
                  <p>{peopleInfo.birthday}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <p className="mb-6 text-[2vw] font-bold">{peopleInfo.name}</p>
            <div className="mb-6">
              <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
              <p className="whitespace-pre-line">{peopleInfo.biography}</p>
            </div>
            <div>
              <RelatedMediaList
                mediaList={peopleInfo?.combined_credits?.cast || []}
                title="Known For"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeoplePage;
