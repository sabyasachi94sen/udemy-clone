import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";
import cx from "clsx";
import { HiEyeOff, HiEye } from "react-icons/hi";

const SIZE_MAPS: Record<string, string> = {
  sm: "px-1 py-1 sm:text-xs",
  md: "py-2 sm:text-sm",
  lg: "px-4 py-4 sm:text-base",
};

type Size = "sm" | "md" | "lg";


export type PasswordInputProps = {
  size?: Size;
  children?: React.ReactNode;
  width?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  cornerText?: string;
  optionalText?: string;
  onInputChange?: () => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  invalidText?: string;
  className?: string;
  leftAddOn?: ReactNode;
} & React.ComponentPropsWithoutRef<"input">;

// eslint-disable-next-line react/display-name
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
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
      size = "md",
      isRequired,
      isInvalid,
      isDisabled,
      leftAddOn,
    },
    ref // For react-hook-form props passing
  ) => {
    // TODO: Write docs
    const [showPassword, setShowPassword] = useState(false);

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
          <input
            ref={ref}
            className={cx(
              "form-input focus:ring-text-primary focus:border-text-primary block w-full border-gray-300 rounded-md shadow-sm",
              {
                "pl-10": leftAddOn,
                "opacity-30": isDisabled,
                "pr-10": isInvalid,
              },
              SIZE_MAPS[size]
            )}
            disabled={isDisabled}
            id={name}
            name={name}
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            onChange={onInputChange}
            {...(isInvalid
              ? { "aria-invalid": "true", "aria-describedby": `${name}-error` }
              : {})}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              className="px-2 py-2 w-max"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <HiEyeOff
                  className={cx("w-4 h-4 opacity-80", {
                    "!opacity-30": isDisabled,
                  })}
                />
              ) : (
                <HiEye
                  className={cx("w-4 h-4 opacity-80", {
                    "!opacity-30": isDisabled,
                  })}
                />
              )}
            </button>
          </div>
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
