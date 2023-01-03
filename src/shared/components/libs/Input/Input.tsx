import cx from "clsx";
import { forwardRef, ReactNode } from "react";
import { HiExclamationCircle } from "react-icons/hi";

const SIZE_MAPS = {
  sm: "px-1 py-1 sm:text-xs",
  base: "py-2 sm:text-sm",
  lg: "px-4 py-4 sm:text-base",
};

const WIDTH_MAPS = {
  full: "w-full",
  "16": "w-16 sm:!w-16",
  "28": "w-28",
  "32": "w-32",
  "64": "w-64",
  "80": "w-80",
  "96": "w-96",
  "4/5": "w-4/5",
  "2/4": "w-2/4", // 80%
  "2/5": "w-2/5",
  "2/6":  "w-2/6", // 33.33%
  "3/4": "w-3/4", // 75%
  "3/5": "w-3/5",
  "5/12": "w-5/12",
  max: "w-max",
};

export type InputProps = {
  size?: keyof typeof SIZE_MAPS;
  width?: keyof typeof WIDTH_MAPS;
  type?: string;
  label?: string;
  rounded?:boolean;
  placeholder?: string;
  name?: string;
  cornerText?: string;
  optionalText?: string;
  onInputChange?: () => void;
  value?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  invalidText?: string;
  className?: string;
  leftAddOn?: ReactNode;
  showErrorIcon?: boolean;
} & React.ComponentPropsWithoutRef<"input">;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = "full",
      type = "text",
      label,
      placeholder,
      rounded,
      name,
      cornerText,
      optionalText,
      invalidText,
      onInputChange,
      value,
      size = "base",
      isRequired,
      isInvalid,
      isDisabled,
      leftAddOn,
      showErrorIcon = true,
      ...props
    },
    ref, // For react-hook-form props passing
  ) => (
    // TODO: Write docs
    // Don't need to pass name seperately, react-hook-form takes care of it
    

    <div className={cx(WIDTH_MAPS[width])}>
      {label && (
        <div className="mb-1 flex justify-between">
          <label
            className={cx("block text-sm font-medium text-gray-700", {
              "opacity-30": isDisabled,
              "!text-secondary": isInvalid,
            })}
            htmlFor={name}
          >
            {label}
            <>
            {isRequired && (
            <span className="text-red-500 ml-2">*</span>)}
            </>
          </label>
         
          {cornerText && (
            <span className="text-sm text-gray-500">{cornerText}</span>
          )}

          {/* {isRequired && (
            <span className="text-sm text-secondary">Required</span>
          )} */}
        </div>
      )}

      <div className="relative rounded-md shadow-sm">
        {leftAddOn && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {leftAddOn}
          </div>
        )}
        <input
          ref={ref}
          className={cx(
            "form-input block w-full 3xl:h-[7vh] md:h-[4vh] lg:h-[8vh] rounded-md md:rounded-[4vw] border-[#000000] border-solid border-[1px] border-gray-300 shadow-sm focus:border-primary focus:ring-primary",
            {
              "pl-10": leftAddOn,
              "opacity-30": isDisabled,
              "pr-10": isInvalid && showErrorIcon,
               "rounded-[25px]": rounded,
              "border-red-500 focus:border-red-500 focus:ring-red-500":
                isInvalid,
            },
            SIZE_MAPS[size],
          )}
          disabled={isDisabled}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          /* Manuanl control of onChange */
          {...(isInvalid
            ? { "aria-invalid": "true", "aria-describedby": `${name}-error` }
            : {})}
          {...(onInputChange && { onChange: onInputChange, value })}
          {...props}
        />
        {isInvalid && showErrorIcon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <HiExclamationCircle
              aria-hidden="true"
              className="h-5 w-5 text-secondary"
            />
          </div>
        )}
      </div>

      {optionalText && (
        <p className="mt-2 text-sm text-gray-500">{optionalText}</p>
      )}

      {isInvalid && invalidText && (
        <p className="mt-2 text-sm text-secondary" id={`${name}-error`}>
          {invalidText}
        </p>
      )}
    </div>
  ),
);
