import React from "react";

type ContainerProps = React.PropsWithChildren<{
  as: "div" | "section" | "aside" | "nav" | "main";
  className?: string;
}>;

export function Container({
  as: Component = "div",
  children,
  className,
}: ContainerProps): JSX.Element {
  return <Component className={className}>{children}</Component>;
}
