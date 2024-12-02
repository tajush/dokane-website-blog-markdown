import React from "react";
import Select from "react-select";

export default function CustomAutocomplete({
  register,
  options,
  onChange,
  optionValue,
  optionLabel,
  placeholder,
  value,
  error,
  textColor,
}) {
  return (
    <>
      <Select
        register={register}
        options={options}
        onChange={onChange}
        value={value}
        theme={(theme) => ({
          ...theme,
          // borderRadius: 0,
          colors: {
            ...theme.colors,
            // selected options color
            primary: "#155263",
            // placeholder color
            neutral50: `${(textColor && textColor) || "black"}`,
          },
        })}
        getOptionValue={optionValue}
        getOptionLabel={optionLabel}
        noOptionsMessage={() => "No data available"}
        placeholder={placeholder}
        isSearchable
      />
      <p className="text-red-500">{error}</p>
    </>
  );
}
