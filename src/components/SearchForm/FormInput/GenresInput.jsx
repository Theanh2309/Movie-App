import useFetch from "@hooks/useFetch.";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";

const GenresInput = ({ control, onChange, value = [] }) => {
  // theo doi data cua 1 field name trong react hook form
  // ?lang nghe du lieu thay doi tren 1 filed trong form
  const mediaType = useWatch({ name: "mediaType", control: control });
  // console.log({ mediaType });
  const { data: genres } = useFetch(
    {
      url: `/genre/${mediaType}/list`,
    },
    { enabled: !!mediaType },
  );
  useEffect(() => {
    onChange([]);
  }, [mediaType]);

  // console.log({ genres });
  return (
    <div className="flex flex-wrap gap-1">
      {(genres?.genres || []).map((genre) => {
        return (
          <p
            className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? "bg-black text-white" : ""}`}
            key={genre.id}
            onClick={() => {
              let newValue = [...value];
              if (value.includes(genre.id)) {
                newValue = newValue.filter((item) => item !== genre.id);
              } else {
                // them moi 1 genres
                newValue = [...newValue, genre.id];
              }
              onChange(newValue);
              // console.log({ value });
            }}
          >
            {genre.name}
          </p>
        );
      })}
    </div>
  );
};
export default GenresInput;
