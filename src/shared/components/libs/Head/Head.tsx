import NextHead from "next/head";

type HeadProps = {
  title?: string;
  children?: React.ReactNode;
};

export function Head({ children, title }: HeadProps): JSX.Element {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{title && ` | ${title}`}</title>

      {/* children must be `<link>` or `<meta>` */}
      {children}
    </NextHead>
  );
}
