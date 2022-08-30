/**
 * Displays the current tailwind viewport size
 */
export function TWResponsiveIndicator(): JSX.Element | null {
  // Hidden except developement mode
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed z-50 bottom-2 right-2 py-1 w-16 text-center text-blue-700 text-sm font-medium bg-blue-100 rounded-full">
      <span className="block sm:hidden">_</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden 2xl:hidden xl:block">xl</span>
      <span className="2xl:block hidden">2xl</span>
    </div>
  );
}
