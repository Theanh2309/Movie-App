import { Controller, useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import CustomField from "./CustomField";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  const params = useSearchParams();
  const [searchParams] = params;
  const mediaType = searchParams.get("mediaType");
  console.log({ mediaType });

  const { handleSubmit, control, register, watch } = useForm({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: "all",
    },
  });

  useEffect(() => {
    const mediaType = searchParams.get("mediaType") || "movie";
    setValue("mediaType", mediaType);
  }, [searchParams, setValue]);

  // hoat dong moi khi co 1 field thay doi, tra ra tat ca data
  const formValues = watch();
  console.log({ formValues });
  useEffect(() => {
    setSearchFormValues(formValues);
  }, [JSON.stringify(formValues)]);
  // khong tao ra button submit nen ko dung ham onSubmit => dung wwatch
  const onSubmit = (data) => {
    console.log({ data });
  };
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* <label>Media Type</label> */}
        {/* <br /> */}
        {/* dang ki 1 field voi react hook form */}
        {/* dinh nghia field name mediaType voi register de quan ly input*/}
        {/* <input type="radio" {...register("mediaType")} value="movie" />
        <label>Movie</label>
        <br />
        <input type="radio" {...register("mediaType")} value="tv" />
        <label>TV Show</label>
        <br />
        <label>Name</label> */}
        {/* <input/> type="text" {...register("name")} /> */}

        {/* cach 2 */}
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />
        {/* <CustomField
          name="username"
          control={control}
          label="Username"
          rules={{ required: "Username is required" }}
        />
        <CustomField
          name="email"
          control={control}
          label="Email"
          type="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
        />
        <CustomField
          name="newsletter"
          control={control}
          label="Subscribe to Newsletter"
          type="checkbox"
        />
        <CustomField
          name="favoriteColor"
          control={control}
          label="Choose your favorite color"
          type="radio"
          rules={{ required: "Please select an option" }}
          options={[
            { value: "red", label: "Red" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
          ]}
        /> */}
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />

        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />

        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};
export default SearchForm;
