import cx from "clsx";
import ReactSelect, { components } from "react-select";
// import { SelectorIcon } from "@heroicons/react/solid";

import styles from "./select.module.scss";

// const DropdownIndicator = (props) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <SelectorIcon aria-hidden="true" className="w-5 h-5 text-gray-400" />
//     </components.DropdownIndicator>
//   );
// };

const customStyles = {
  control: (base, state) => ({
    ...base,
    boxShadow: "none",
  }),
};

export type SelectProps = {
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  options: { value: string; label: string }[];
  isClearable?: boolean;
  cornerText?: string;
  optionalText?: string;
  label?: string;
  invalidText?: string;
  name?: string;
  isMultiSelect?: boolean;
  maxSelectableOptions?: number;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  width?: string;
};

export function Select({
  isRequired,
  isDisabled,
  isInvalid,
  options,
  isClearable = false,
  cornerText,
  optionalText,
  label,
  invalidText,
  name,
  isMultiSelect,
  maxSelectableOptions = 3,
  placeholder = null,
  value,
  onChange,
  width = "w-full",

  ...props
}: SelectProps): JSX.Element {
  // TODO : Write docs

  return (
    <div className={cx(width)}>
      {label && (
        <div className="flex justify-between mb-1">
          <label
            className={cx("text-neutral block text-sm font-medium", {
              "opacity-30": isDisabled,
              "!text-red-500": isInvalid,
            })}
            htmlFor={name}
          >
            {label}
          </label>

          {cornerText && (
            <span className="text-gray-500 text-sm">{cornerText}</span>
          )}
        </div>
      )}
      <ReactSelect
        className={styles.select}
        components={{ DropdownIndicator }}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isMulti={isMultiSelect}
        options={value?.length === maxSelectableOptions ? [] : options}
        placeholder={placeholder}
        styles={customStyles}
        // menuIsOpen={false}
        // styles={customStyles}
        {...props}
      />
      {isInvalid && invalidText && (
        <p className="mt-2 text-red-600 text-sm" id={`${name}-error`}>
          {invalidText}
        </p>
      )}
    </div>
  );
}
