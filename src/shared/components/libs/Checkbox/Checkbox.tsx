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
    ref,
  ) => (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center disabled:cursor-not-allowed">
        <input
          ref={ref}
          aria-describedby={`${name}-description`}
          className={cx(
            "form-checkbox rounded border-gray-300 text-primary focus:ring-primary",
            SIZE_MAPS[size],
          )}
          disabled={isDisabled}
          id={name}
          name={name}
          type="checkbox"
          onChange={onInputChange}
        />
      </div>
      <div className="ml-3 text-sm">
        <label className="font-medium text-gray-700" htmlFor={name}>
          {label}
        </label>
        {optionalText && (
          <p className="text-gray-500" id={`${name}-description`}>
            {optionalText}
          </p>
        )}
      </div>
    </div>
  ),
);
