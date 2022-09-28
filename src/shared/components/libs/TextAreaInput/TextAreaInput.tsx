import cx from "clsx";
import { forwardRef, ReactNode } from "react";
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
        <TextareaAutosize
          ref={ref}
          cacheMeasurements
          className={cx(
            "form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary",
            {
              "pl-10": leftAddOn,
              "opacity-30": isDisabled,
              "pr-10": isInvalid && showErrorIcon,
            },
            SIZE_MAPS[size],
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
