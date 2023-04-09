import Select, { StylesConfig } from "react-select";

type MyOptionType = {
  label: string;
  value: string;
};

interface SelectProps {
  options: MyOptionType[];
  value?: MyOptionType;
  placeholder?: string;
  disabled?: boolean;
  onChange?: () => void;
}

const customStyles: StylesConfig<MyOptionType> = {
  control: (styles, { isDisabled }) => ({
    ...styles,
    height: "52px",
    padding: "0.375rem 1.5rem",
    backgroundColor: isDisabled ? "#e9ecef" : "#FFFFFF",
    border: "1px solid #CED4DA",
    borderRadius: 4,
    boxShadow: "none",
    ":hover": {
      border: "1px solid #CED4DA",
      boxShadow: "none",
    },
  }),

  option: (styles, { isDisabled, isSelected }) => {
    return {
      ...styles,
      padding: "0.375rem 1.5rem",
      border: "none",
      backgroundColor: isDisabled ? undefined : isSelected ? "#7749F8" : "",
      color: isDisabled ? undefined : isSelected ? "#FFFFFF" : "",
      fontSize: "20px",
      ":hover": {
        ...styles[":hover"],
        backgroundColor: "#EBE5FC",
        color: "#5227CC",
      },
      ":active": {
        ...styles[":active"],
        backgroundColor: "#7749F8",
        color: "#FFFFFF",
      },
      ":focus": {
        ...styles[":focus"],
        backgroundColor: "#7749F8",
        color: "#FFFFFF",
      },
    };
  },
  input: (styles) => {
    return {
      ...styles,
      borderRadius: 50,
    };
  },
  singleValue: (styles) => {
    return {
      ...styles,
      fontSize: "20px",
    };
  },
  placeholder: (style) => {
    return {
      ...style,
      fontSize: "20px",
      color: "#909599",
    };
  },
  indicatorSeparator: (style) => {
    return {
      ...style,
      width: "0px",
    };
  },
};

const CustomSelect = ({
  options,
  value,
  placeholder = "請選擇",
  disabled,
  onChange,
}: SelectProps) => {
  return (
    <Select
      options={options}
      value={value}
      placeholder={placeholder}
      isDisabled={disabled}
      onChange={onChange}
      styles={customStyles}
    />
  );
};

export default CustomSelect;
