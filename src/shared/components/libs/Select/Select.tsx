import cx from "clsx";
import ReactSelect, {
  GroupBase,
  Props as ReactSelectProps,
} from "react-select";
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

const WIDTH_MAPS = {
  full: "w-full",
  maxContent: "w-max",
  "8": "w-8",
  "16": "w-16",
  "28": "w-28",
  "32": "w-32",
  "40": "w-40",
  "64": "w-64",
  "80": "w-80",
  "96": "w-96",
};

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = {
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  options: { value: string | number | boolean; label: string }[];
  isClearable?: boolean;
  optionalText?: string;
  label?: string;
  invalidText?: string;
  name?: string;
  isMultiSelect?: boolean;
  maxSelectableOptions?: number;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  overrideStyles?: string;
  width?: keyof typeof WIDTH_MAPS;
  cornerText?: string;
} & ReactSelectProps<Option, IsMulti, Group>;

export function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: SelectProps<Option, IsMulti, Group>): JSX.Element {
  // TODO : Write docs

  const {
    isClearable,
    label,
    isInvalid,
    invalidText,
    maxSelectableOptions = 3,
    width = "full",
    cornerText,
    name,
    value,
    options,
    isDisabled,
    onChange,
    isMulti,
    defaultValue,
    overrideStyles,
    ...rest
  } = props;

  return (
    <div className={cx(width)}>
      {label && (
        <div className="mb-1 flex justify-between">
          <label
            className={cx("block text-sm font-medium text-neutral", {
              "opacity-30": isDisabled,
              "!text-red-500": isInvalid,
            })}
            htmlFor={name}
          >
            {label}
          </label>

          {cornerText && (
            <span className="text-sm text-gray-500">{cornerText}</span>
          )}
        </div>
      )}
      <ReactSelect
        className={styles.select}
        classNamePrefix="custom-select"
        components={{}}
        defaultValue={defaultValue}
        isClearable={isClearable}
        isDisabled={isDisabled}
        // menuPortalTarget={document.body}
        noOptionsMessage={() => ""}
        options={options}
        styles={{ ...customStyles, ...overrideStyles }}
        value={
          isMulti
            ? options.filter((c) => value.includes(c.value))
            : options.find((c) => c.value === value)
        }
        onChange={(val) =>
          isMulti ? onChange?.(val.map((c) => c.value)) : onChange?.(val.value)
        }
        // menuIsOpen={false}
        {...rest}
      />
      {isInvalid && invalidText && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {invalidText}
        </p>
      )}
    </div>
  );
}
