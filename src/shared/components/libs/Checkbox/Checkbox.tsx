import cx from "clsx";
import { forwardRef } from "react";

const SIZE_MAPS: Record<string, string> = {
  sm: "w-4 h-4 sm:text-xs",
  base: "w-5 h-5 sm:text-sm",
  lg: "w-6 h-6 sm:text-base",
};

type Size = "sm" | "base" | "lg";

export type CheckboxProps = {
  size?: Size;
  label: string;
  optionalText?: string;
  onInputChange?: () => void;
  isDisabled?: boolean;
  name?: string;
} & React.ComponentPropsWithoutRef<"input">;

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { size = "sm", label, optionalText, onInputChange, isDisabled, name },
    ref
  ) => {
    return (
      <div className="relative flex items-start">
        <div className="flex items-center h-5 disabled:cursor-not-allowed">
          <input
            ref={ref}
            aria-describedby={`${name}-description`}
            className={cx(
              "form-checkbox text-primary-500 focus:ring-primary-500 border-gray-300 rounded",
              SIZE_MAPS[size]
            )}
            disabled={isDisabled}
            id={name}
            name={name}
            type="checkbox"
            onChange={onInputChange}
          />
        </div>
        <div className="ml-3 text-sm">
          <label className="text-gray-700 font-medium" htmlFor={name}>
            {label}
          </label>
          {optionalText && (
            <p className="text-gray-500" id={`${name}-description`}>
              {optionalText}
            </p>
          )}
        </div>
      </div>
    );
  }
);
