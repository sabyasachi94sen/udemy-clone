import cx from "clsx";
import { ReactNode } from "react";

export type SkeletonProps = {
  height?: string;
  width?: string;
  isLoaded: boolean;
  hasContent: boolean;
  children: ReactNode;
  numOfLoaderLines?: number;
  className?: string;
};

// Default height: 20px
// Default width: 75% of the container

/**
 * applies the height on the animation container classes
 * the inside bgcolor div takes up full-height and width of the item
 * we create tailwind h and w classes based on passed props, with h-5  and w-9/12 (75%) class being default
 */
export function Skeleton({
  height = "h-5",
  width = "w-9/12",
  isLoaded,
  hasContent,
  children,
  numOfLoaderLines = 1,
  className = "",
}: SkeletonProps): JSX.Element | null {
  // TODO: Write docs for usage

  // If not isLoaded: show the animation LoadingSkeleton
  if (!isLoaded) {
    return (
      <div
        className={cx(
          "flex flex-col space-y-1 animate-pulse",
          height,
          width,
          className
        )}
      >
        {/* To handle multiline situation */}
        {/* fixed space is divided equality among each row, and gap */}
        {[...Array(numOfLoaderLines).keys()].map((idx) => (
          <div
            key={idx}
            className={cx(
              "bg-primary-500 flex-1 w-full h-full bg-opacity-30 rounded"
            )}
          />
        ))}
      </div>
    );
  }

  // if isLoaded but  don't hasContent: render nothing
  if (isLoaded && !hasContent) {
    return null;
  }

  // if isLoaded and hasContent: render the children component
  if (isLoaded && hasContent) {
    return <>{children}</>;
  }

  return null;
}
