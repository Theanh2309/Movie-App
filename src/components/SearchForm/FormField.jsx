import { Controller } from "react-hook-form";

const FormField = ({ control, label, name, Component }) => {
  return (
    <div>
      <p className="mb-1 font-bold">{label}</p>
      {/* cach 2 dung react hook form */}
      {/* dung controler de tao 1 field  */}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => {
          // return <Component onChange={onChange} value={value} name={name} />;
          return (
            <Component onChange={onChange} value={value} control={control} />
          );
        }}
      />
    </div>
  );
};
export default FormField;
