import React from "react";
import { Controller } from "react-hook-form";

function CustomField({
  name,
  control,
  label,
  type = "text",
  options,
  rules,
  defaultValue = "",
  ...props
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div>
          {type === "checkbox" ? (
            <label>
              <input
                type="checkbox"
                {...field} // Truyền giá trị và onChange
                checked={field.value} // Kiểm soát trạng thái checked
                {...props} // Các props bổ sung nếu cần
              />
              {label}
            </label>
          ) : type === "radio" ? (
            <div>
              <label>{label}</label>
              {options.map((option) => (
                <label key={option.value}>
                  <input
                    type="radio"
                    value={option.value}
                    checked={field.value === option.value} // Kiểm soát trạng thái checked
                    onChange={field.onChange} // Thay đổi giá trị
                    onBlur={field.onBlur} // Gọi onBlur
                  />
                  {option.label}
                </label>
              ))}
            </div>
          ) : (
            <div>
              <label>{label}</label>
              <input
                type={type} // Loại input (text, email, password, v.v.)
                {...field}
                {...props}
              />
            </div>
          )}
          {error && <span style={{ color: "red" }}>{error.message}</span>}
        </div>
      )}
    />
  );
}

export default CustomField;
