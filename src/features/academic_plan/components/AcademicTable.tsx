import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import {setLocalStorage} from "@/features/helpers";


import { Account } from "@/api";
import {
  BaseTable,
  IconButton,
  StatusCell,
  Checkbox,
  Input,
  RowNavigate,
} from "@/shared/components";

import { formatDate } from "@/shared/utils";
import { useStoreData } from "@/shared/stores/modal.store";
import { FaWindowRestore } from "react-icons/fa";
import { isGeneratorFunction } from "util/types";

export function AcademicTable({ onView,AepListQuery,page }): JSX.Element {

  
  const [zoomVal,setZoomVal]=useState(Math.round(window.devicePixelRatio*100))
 

  window.onresize=function(){
    console.log(Math.round(window.devicePixelRatio*100))
    setZoomVal(Math.round(window.devicePixelRatio*100))
  
  }

  // const updateCompleteMutation = useUpdateComplete();

    const router=useRouter()
    

  const columnHelper = createColumnHelper<Account>();

  const [storeAepData, setStoreAepData] = useState([]);

  const getCountry=()=>{

    if(zoomVal==113)
    return <div className={`w-[250%] text-center`}>Country of residence</div>
    else if(zoomVal==100)
    return <div className={`w-[300%] text-center`}>Country of residence</div>
    else if(zoomVal==138)
    return <div className={`w-[185%] text-center`}>Country of residence</div>
    else
    return <div className={`w-[225%] text-center`}>Country of residence</div>
  }


  const getManager=()=>{
   
    if(zoomVal==113)
    return <div className="w-[190%] text-center">Account Manager</div>
    else if(zoomVal==100)
    return <div className="w-[230%] text-center">Account Manager</div>
    else if(zoomVal==138)
    return <div className="w-[130%] text-center">Account Manager</div>
    else
    return <div className="w-[160%] text-center">Account Manager</div>

  }

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.student?.student_name, {
        id: "student_name",
        header: "Name",
        cell: (info) => (
          <RowNavigate
            onClick={() => storeStudentName(info.getValue())}
            rowLink={() => {
              router.push(`/academic-list/${info.row.original?.student?.id}`);
              setLocalStorage("studentName",info.getValue())
              setLocalStorage("studentId",info.row.original?.student?.id)
            }}
            rowValue={info.getValue()}
          />
        ),
      }),
      columnHelper.accessor((row) => row.student?.date_of_birth, {
        id: "date_of_birth",
        header: "Date of Birth",
        cell: (info) => <div className="pl-3">{info.getValue()!=null?formatDate(info.getValue()): null}</div>,
      }),
      columnHelper.accessor((row) => row?.student?.country_of_citizenship, {
        id: "country",
        
        header: getCountry(),
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row.account_manager?.username, {
        id: "manager_name",
        header: getManager(),
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),

      columnHelper.accessor((row) => row?.is_active, {
        id: "is_active",
        header: <span className="relative left-3">Active</span>,
        cell: (info) => (
         
          <StatusCell
            rowValue={info.getValue() === true ? "Active" : "Inactive"}
            statusColor={info.getValue() === true ? "active" : "inactive"}
            
          />
          
        ),
      }),
    ],
    [zoomVal],
  );

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={AepListQuery?.data}
      isLoading={AepListQuery?.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
    />
  );
}
