import clsx from "clsx";
import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";




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



export function CompleteBar({ rowValue }: { rowValue: string }): JSX.Element {

  

  return (
    
         <div className="flex w-[100%] justify-between">
           <span>{rowValue}%&nbsp;</span>
          <ProgressBar completed={rowValue} className="w-[90%]" bgColor="#0ea5e9"/>
          </div>
    
        
    
  );
}

export function RowNavigate({ rowLink, rowValue, onClick }): JSX.Element {
  return (
    <div className="cursor-pointer hover:underline" onClick={rowLink}>
      {rowValue}
    </div>
  );
}

export function ViewButton({ onClick }): JSX.Element {
  return (
    <button
      className="mt-1 h-[6vh] w-[100%] rounded-lg border-[1px] border-black bg-white text-black hover:bg-slate-200 flex items-center justify-center"
      type="button"
      onClick={onClick}
    >
    <img src={"https://thumbs.dreamstime.com/b/info-icon-information-sign-speech-bubble-symbol-i-letter-vector-illustration-125540368.jpg"} className="w-[1.5rem] h-[1.5rem]" />
    </button>
  );
}
