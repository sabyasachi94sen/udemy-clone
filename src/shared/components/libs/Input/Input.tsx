import cx from "clsx";
import { forwardRef, ReactNode } from "react";
import { HiExclamationCircle } from "react-icons/hi";

const SIZE_MAPS: Record<string, string> = {
  sm: "px-1 py-1 sm:text-xs",
  base: "py-2 sm:text-sm",
  lg: "px-4 py-4 sm:text-base",
};

type Size = "sm" | "base" | "lg";

export type InputProps = {
  size?: Size;
  width?: string;
  type?: string;
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
  leftAddOn?: ReactNode;
  showErrorIcon?: boolean;
} & React.ComponentPropsWithoutRef<"input">;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = "w-full",
      type = "text",
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
      showErrorIcon = true,
      ...props
    },
    ref, // For react-hook-form props passing
  ) => (
    // TODO: Write docs
    // Don't need to pass name seperately, react-hook-form takes care of it

    <div className={cx(width)}>
      {label && (
        <div className="mb-1 flex justify-between">
          <label
            className={cx("block text-sm font-medium text-gray-700", {
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

          {isRequired && <span className="text-sm text-red-600">required</span>}
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
            "form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary",
            {
              "pl-10": leftAddOn,
              "opacity-30": isDisabled,
              "pr-10": isInvalid && showErrorIcon,
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
              className="h-5 w-5 text-red-500"
            />
          </div>
        )}
      </div>

      {optionalText && (
        <p className="mt-2 text-sm text-gray-500">{optionalText}</p>
      )}

      {isInvalid && invalidText && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {invalidText}
        </p>
      )}
    </div>
  ),
);
