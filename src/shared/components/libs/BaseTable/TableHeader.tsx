interface TableHeaderProps {
  children: React.ReactNode;
}

export function TableHeader({ children }: TableHeaderProps): JSX.Element {
  return <thead className="bg-gray-50">{children}</thead>;
}

interface TableHeaderCellProps {
  columnName: string;
}

export function TableHeaderCell({ columnName }: TableHeaderCellProps) {
  return (
    <th
      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
      scope="col"
    >
      {columnName}
    </th>
  );
}
