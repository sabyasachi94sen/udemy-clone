interface TableRowCellProps {
  rowValue: string | number;
}

export function TableRowCell({ rowValue }: TableRowCellProps): JSX.Element {
  return (
    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
      {rowValue}
    </td>
  );
}
