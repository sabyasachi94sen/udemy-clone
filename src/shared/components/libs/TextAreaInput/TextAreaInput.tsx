import { forwardRef, ReactNode } from "react";
import cx from "clsx";
import { HiExclamationCircle } from "react-icons/hi";
import TextareaAutosize from "react-textarea-autosize";

const SIZE_MAPS: Record<string, string> = {
  sm: "px-1 py-1 sm:text-xs",
  md: "py-2 sm:text-sm",
  lg: "px-4 py-4 sm:text-base",
};

type Size = "sm" | "md" | "lg";

export type TextAreaInputProps = {
  size?: Size;
  width?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  cornerText?: string;
  optionalText?: string;
  value?: string;
  onInputChange?: () => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  invalidText?: string;
  className?: string;
  leftAddOn?: ReactNode;
  showErrorIcon?: boolean;
};

// eslint-disable-next-line react/display-name
export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(
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
      size = "md",
      isRequired,
      isInvalid,
      isDisabled,
      leftAddOn,
      showErrorIcon = true,
      ...props
    },
    ref // For react-hook-form props passing
  ) => {
    // TODO: Write docs
    // Don't need to pass name seperately, react-hook-form takes care of it

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
          <TextareaAutosize
            ref={ref}
            cacheMeasurements
            className={cx(
              "form-textarea focus:ring-text-primary focus:border-text-primary block w-full border-gray-300 rounded-md shadow-sm",
              {
                "pl-10": leftAddOn,
                "opacity-30": isDisabled,
                "pr-10": isInvalid && showErrorIcon,
              },
              SIZE_MAPS[size]
            )}
            disabled={isDisabled}
            id={name}
            minRows={3}
            name={name}
            placeholder={placeholder}
            onChange={onInputChange}
            {...(isInvalid
              ? { "aria-invalid": "true", "aria-describedby": `${name}-error` }
              : {})}
            {...(isInvalid
              ? { "aria-invalid": "true", "aria-describedby": `${name}-error` }
              : {})}
            {...(onInputChange && { onChange: onInputChange, value })}
            {...props}
          />
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
