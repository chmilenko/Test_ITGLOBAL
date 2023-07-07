/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Select from "react-select";
import "./SelectLang.css";
import { options } from "./options";

const defaultValue = {
  value: "Россия",
  abbreviation: "RU",
  label: "Россия",
  icon: "/img/rus.png",
};

// eslint-disable-next-line object-curly-newline
function CustomSingleValue({ innerProps, label, data, selectProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...innerProps}>
      <div>
        <img
          src={data.icon}
          alt={label}
          style={{
            width: "24px",
            height: "24px",
            marginLeft: "-7px",
            textTransform: "uppercase",
            fontSize: "12px",
            position: "absolute",
            border: "none",
            outline: "none",
            top: "1px",
          }}
        />
      </div>
      <div style={{ marginLeft: "16px", marginTop: "-15px" }}>
        {selectProps.value.abbreviation}
      </div>
    </div>
  );
}

function CustomOption({ innerProps, label, data }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div style={{ display: "flex", alignItems: "center" }} {...innerProps}>
      <img
        src={data.icon}
        alt={label}
        style={{ width: "24px", marginRight: "5px" }}
      />
      <div>{data.value}</div>
    </div>
  );
}

function SelectLanguage() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      defaultValue={defaultValue}
      isSearchable={false}
      styles={{
        control: (provided) => ({
          ...provided,
          width: "80px",
          height: "32px",
          border: "none",
          outline: "none",
        }),
        menu: (provided) => ({
          ...provided,
          width: "180px",
        }),
      }}
      components={{
        SingleValue: CustomSingleValue,
        Option: CustomOption,
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default SelectLanguage;
