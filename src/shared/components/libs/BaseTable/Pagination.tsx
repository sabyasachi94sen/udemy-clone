interface PaginationProps {
  totalPages: number | string;
  currentPage: number | string;
  onGoToNextPage: () => void;
  onGoToPreviousPage: () => void;
  canGoToNextPage: boolean;
  canGoToPreviousPage: boolean;
  totalResultCount: number;
  visibleResultCountStart: number;
  visibleResultCountEnd: number;
}

export function Pagination({
  totalPages = 10,
  currentPage = 1,
  onGoToNextPage,
  onGoToPreviousPage,
  canGoToNextPage = true,
  canGoToPreviousPage = false,
  totalResultCount = 100,
  visibleResultCountStart = 1,
  visibleResultCountEnd = 10,
  t,
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{visibleResultCountStart}</span>{" "}
          to <span className="font-medium">{visibleResultCountEnd}</span> of{" "}
          <span className="font-medium">{totalResultCount}</span> results
        </p>
      </div>
      <div className="flex flex-1 items-center justify-between sm:justify-end">
        <p className="mr-4 space-x-1 text-sm font-medium text-gray-700">
          <span>Page:</span>
          <span>{currentPage}</span>
          <span>of</span>
          <span>{totalPages}</span>
        </p>
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={!canGoToPreviousPage}
          type="button"
          onClick={onGoToPreviousPage}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={!canGoToNextPage}
          type="button"
          onClick={onGoToNextPage}
        >
          Next
        </button>
      </div>
    </nav>
  );
}
