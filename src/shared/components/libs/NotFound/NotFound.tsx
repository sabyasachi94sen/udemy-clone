import Link from "next/link";

export type NotFoundProps = {
  title?: string;
  description?: string;
};

export function NotFound({
  title = "This page does not exist.",
  description = "Sorry, we couldn’t find the page you’re looking for.",
}: NotFoundProps): JSX.Element {
  return (
    <div className="flex flex-col pb-12 pt-16 bg-white">
      <main className="flex flex-col flex-grow justify-center mx-auto px-4 w-full max-w-7xl sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
              404 error
            </p>
            <h1 className="mt-2 text-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-gray-500 text-base">{description}</p>
            <div className="mt-6">
              <Link passHref href="/">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-primary-500 text-primary-600 text-base font-medium">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
