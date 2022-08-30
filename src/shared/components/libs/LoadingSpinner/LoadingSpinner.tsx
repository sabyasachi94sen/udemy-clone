import cx from "clsx";
import { CgSpinner } from "react-icons/cg";

const COLOR_MAPS: Record<string, string> = {
  primary: "text-primary-500",
  secondary: "text-secondary-500",
  white: "text-white",
};

type FillColor = "primary" | "secondary" | "white";

export type LoadingSpinnerProps = {
  size?: string;
  fillColor?: FillColor;
};

export function LoadingSpinner({
  size = "text-2xl",
  fillColor = "white",
}: LoadingSpinnerProps): JSX.Element {
  // TODO: Write docs

  return (
    <CgSpinner
      className={cx("fill-current animate-spin", size, COLOR_MAPS[fillColor])}
    />
  );
}
