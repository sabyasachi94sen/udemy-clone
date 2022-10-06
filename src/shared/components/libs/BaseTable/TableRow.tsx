import clsx from "clsx";

export function TableRowCell({
  rowValue,
}: {
  rowValue: string | number;
}): JSX.Element {
  return (
    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
      {rowValue}
    </td>
  );
}

const STATUS_VARIANT_MAPS = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-red-100 text-red-800",
};

export function StatusCell({
  rowValue,
  statusColor,
}: {
  rowValue: string | number;
  statusColor: keyof typeof STATUS_VARIANT_MAPS;
}): JSX.Element {
  return (
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <span
        className={clsx(
          "inline-flex rounded-full px-2 text-xs font-semibold leading-5 ",
          STATUS_VARIANT_MAPS[statusColor],
        )}
      >
        {rowValue}
      </span>
    </td>
  );
}

export function CompleteBar({ rowValue }: {rowValue: string}): JSX.Element{

  const percentValue=String(rowValue+"%")
  return (
    <div className="flex items-start text-gray-500">
      <span>{rowValue} %</span>
      <div className="ml-3 h-[2vh] w-[35%] rounded-full bg-gray-200 dark:bg-gray-700">
        <div className={`h-[2vh] w-[${percentValue}] rounded-full bg-gray-500 p-0.5 text-center text-xs font-medium leading-none text-blue-100`} />
      </div>
    </div>
  )


}


export function RowNavigate({ rowLink,rowValue }): JSX.Element{
  return (
    <div className="hover:underline cursor-pointer" onClick={rowLink}>{rowValue}</div>
  )
}


export function ViewButton({ onClick }):JSX.Element{
 
   return (
     <button className="bg-white text-black mt-1 w-[90%] h-[6vh] border-black hover:bg-slate-200 border-[1px] rounded-lg" type="button" onClick={onClick}>Details</button>
   )
}



