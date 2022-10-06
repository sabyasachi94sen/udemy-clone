import cx from "clsx";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const WIDTH_MAPS = {
  "36": "w-36 sm:w-24",
  "42": "w-44 sm:w-24",
  "44": "w-44 sm:w-24",
  "48": "w-48 sm:w-36",
  "64": "w-64 sm:w-64",
  max: "w-max",
  full: "w-full",
};

const SIZE_MAPS = {
  xs: "px-2.5 py-1.5 text-xs rounded",
  sm: "px-3 py-2 text-sm leading-4 rounded-md",
  base: "px-4 py-2 text-sm rounded-md",
  lg: "px-4 py-2 text-base rounded-md",
};

const VARIANT_MAPS = {
  primary: "bg-primary hover:opacity text-white focus:ring-primary",
  secondary:
    "bg-secondary hover:bg-secondary-600 text-white focus:ring-secondary",
  outlined:
    "bg-white hover:bg-gray-50 text-gray-700 focus:ring-primary !border-gray-300",
};

// Loader size calculated based on button size
const LOADER_SIZE_MAPS = {
  xs: "text-sm",
  sm: "text-sm",
  base: "text-xl",
  lg: "text-lg",
};

export type ButtonProps = React.PropsWithChildren<{
  variant?: keyof typeof VARIANT_MAPS;
  size?: keyof typeof SIZE_MAPS;
  type?: string;
  loadingText?: string;
  onClick?: () => void;
  className?: string;
  width?: keyof typeof WIDTH_MAPS;
  isLoading?: boolean;
  isDisabled?: boolean;
  leadingAddOn?: React.ReactNode;
  trailingAddOn?: React.ReactNode;
}> &
  React.ComponentPropsWithoutRef<"button">;

export function Button({
  width = "max",
  type = "button",
  className,
  loadingText,
  onClick,
  variant = "primary",
  size = "base",
  isLoading,
  isDisabled,
  leadingAddOn,
  trailingAddOn,
  children,
}: ButtonProps): JSX.Element {
  // TODO: Write docs

  return (
    <button
      className={cx(
        "text inline-flex items-center justify-center border border-transparent font-medium shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed",
        width,
        className,
        {
          "opacity-50": isLoading || isDisabled,
        },
        WIDTH_MAPS[width],
        VARIANT_MAPS[variant],
        SIZE_MAPS[size],
      )}
      disabled={isLoading || isDisabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="inline-flex items-center">
          <LoadingSpinner size={cx(LOADER_SIZE_MAPS[size])} />
          {loadingText && <span className={cx("ml-2")}>{loadingText}</span>}
        </div>
      ) : (
        <>
          {leadingAddOn}
          {children}
          {trailingAddOn}
        </>
      )}
    </button>
  );
}
