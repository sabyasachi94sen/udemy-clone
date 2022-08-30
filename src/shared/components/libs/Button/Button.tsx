import cx from "clsx";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const SIZE_MAPS: Record<string, string> = {
  xs: "px-2.5 py-1.5 text-xs rounded",
  sm: "px-3 py-2 text-sm leading-4 rounded-md",
  base: "px-4 py-2 text-sm rounded-md",
  lg: "px-4 py-2 text-base rounded-md",
};

const VARIANT_MAPS: Record<string, string> = {
  primary:
    "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500",
  secondary:
    "bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500",
  outlined:
    "bg-white hover:bg-gray-50 text-gray-700 focus:ring-primary-500 !border-gray-300",
};

// Loader size calculated based on button size
const LOADER_SIZE_MAPS = {
  xs: "text-sm",
  sm: "text-sm",
  base: "text-lg",
  lg: "text-lg",
};

type Variant = "primary" | "secondary" | "outlined";
type Size = "xs" | "sm" | "base" | "lg";

export type ButtonProps = React.PropsWithChildren<{
  variant?: Variant;
  size?: Size;
  type?: string;
  loadingText?: string;
  onClick?: () => void;
  className?: string;
  width?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  leadingAddOn?: React.ReactNode;
  trailingAddOn?: React.ReactNode;
}> &
  React.ComponentPropsWithoutRef<"button">;

export function Button({
  width = "w-full",
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
        "text inline-flex items-center justify-center font-medium border border-transparent focus:outline-none hover:shadow-md shadow-sm disabled:cursor-not-allowed focus:ring-2 focus:ring-offset-2",
        width,
        className,
        {
          "opacity-50": isLoading || isDisabled,
        },
        VARIANT_MAPS[variant],
        SIZE_MAPS[size]
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
