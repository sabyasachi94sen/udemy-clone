import cx from "clsx";

export function Button({ children, className = "", ...rest }) {
  return (
    <button
      className={cx(
        "relative inline-flex items-center px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300 rounded-md",
        className
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({ children, className = "", ...rest }) {
  return (
    <button
      className={cx(
        "relative inline-flex items-center px-2 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300",
        className
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
