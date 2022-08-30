import { forwardRef, ReactNode } from "react";
import cx from "clsx";
import { HiExclamationCircle } from "react-icons/hi";

const SIZE_MAPS: Record<string, string> = {
  sm: "px-1 py-1 sm:text-xs",
  base: "py-2 sm:text-sm",
  lg: "px-4 py-4 sm:text-base",
};

type Size = "sm" | "base" | "lg";

export type SimpleSelectProps = {
  size?: Size;
  width?: string;
  label?: string;
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
  showErrorIcon?: boolean;
  defaulValue?: string;
  leftAddOn?: ReactNode;
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"select">;

// eslint-disable-next-line react/display-name
export const SimpleSelect = forwardRef<HTMLSelectElement, SimpleSelectProps>(
  (
    {
      width = "w-full",
      label,
      placeholder,
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
      defaulValue,
      children,
      showErrorIcon = true,
      ...props
    },
    ref // For react-hook-form props passing
  ) => {
    return (
      <div className={cx(width)}>
        {label && (
          <div className="flex justify-between mb-1">
            <label
              className={cx("block text-gray-700 text-sm font-medium", {
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

            {isRequired && (
              <span className="text-red-600 text-sm">required</span>
            )}
          </div>
        )}

        <div className="relative rounded-md shadow-sm">
          {leftAddOn && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {leftAddOn}
            </div>
          )}
          <select
            ref={ref}
            className={cx(
              "form-select focus:border-primary-500 focus:ring-primary-500 block mt-1 pl-3 pr-10 py-2 w-full border-gray-300 rounded-md focus:outline-none",
              {
                "pl-10": leftAddOn,
                "opacity-30": isDisabled,
                "pr-10": isInvalid && showErrorIcon,
              },
              SIZE_MAPS[size]
            )}
            defaultValue={defaulValue}
            id={name}
            name={name}
            /* Manuanl control of onChange */
            {...(isInvalid
              ? { "aria-invalid": "true", "aria-describedby": `${name}-error` }
              : {})}
            {...(onInputChange && { onChange: onInputChange, value })}
            {...props}
          >
            {/* TODO: Support placeholder */}
            <option disabled hidden selected value>
              {" "}
            </option>
            {children}
          </select>

          {isInvalid && showErrorIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <HiExclamationCircle
                aria-hidden="true"
                className="w-5 h-5 text-red-500"
              />
            </div>
          )}
        </div>

        {optionalText && (
          <p className="mt-2 text-gray-500 text-sm">{optionalText}</p>
        )}

        {isInvalid && invalidText && (
          <p className="mt-2 text-red-600 text-sm" id={`${name}-error`}>
            {invalidText}
          </p>
        )}
      </div>
    );
  }
);
