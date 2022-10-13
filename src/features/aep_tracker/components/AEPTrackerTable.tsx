import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState} from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useAepComplete} from "@/shared/services/aep-tracker.service";

import { Account } from "@/api";
import { BaseTable, IconButton ,StatusCell,Checkbox,Input,RowNavigate} from "@/shared/components";


import { formatDate } from "@/shared/utils";


export function AEPTrackerTable({
  onView,
  AepTrackerQuery,
  page,
  isSearch
}): JSX.Element {

  // const updateCompleteMutation = useUpdateComplete();
  const date=new Date()
  const curData=date.getFullYear()+"/"+date.getMonth()+1+"/"+date.getDay()



  const columnHelper = createColumnHelper<Account>();

  const [storeAepData,setStoreAepData]=useState([])
  const aepComplete=useAepComplete()

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.activity_assignment?.student?.student_name, {
        id: "student_name",
        header: "Student Name",
        cell: (info) =>  (<RowNavigate rowLink={()=>onView(info.row.original)} rowValue={info.getValue()} />) ,
      }),
      columnHelper.accessor((row) => row.activity_assignment?.activity?.activity_name, {
        id: "activity_name",
        header: "Activity Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.activity_assignment?.activity?.activity_type, {
        id: "activity_type",
        header: "Activity Type",
        cell: (info) => (info.getValue()),
      }),
      columnHelper.accessor((row) =>row.activity_assignment?.activity?.subject, {
        id: "subject",
        header: "Subject",
        cell: (info) => (
         info.getValue()
        ),
      }),
      columnHelper.accessor((row) => row.action_map?.action, {
        id: "task",
        header: "Task",
        cell: (info) => (
         info.getValue()
        ),
      }),
      columnHelper.accessor((row) => row.target_date, {
        id: "target_date",
        header: "Target Date",
        cell: (info) => (
          info.getValue() ? formatDate(info.getValue()) : null
        ),
      }),

      columnHelper.accessor((row) => row.activity_assignment?.activity?.is_active, {
        id: "is_active",
        header: "Active",
        cell: (info) => (
          <>
          {!info.row.original.is_completed?
         <div className={`w-[10px] h-[10px] ml-4 ${formatDate(info.row.original.target_date)==curData?`bg-red-500`: `bg-gray-500`} rounded-lg`}></div>
         : <div className={`w-[10px] h-[10px] ml-4 bg-green-500 rounded-lg`}></div>}
        </>
        
        ),
      }),

      columnHelper.accessor((row) => row.is_completed, {
        id: "is_complete",
        header: "Complete",
        cell: (info) => (
          <div className="pl-6">
         <Checkbox size={"lg"} isChecked={info.getValue()} onClick={

          ()=> aepComplete.mutate({plan_id: info.row.original.id,is_completed: true,remarks: ""})
            
  
          
         } />
         </div>
        ),
      }),


    ],
    [],
  );


  useEffect(()=>{
       
    

    if(AepTrackerQuery.isSuccess){
      const tempArr=AepTrackerQuery?.data?.yet_to_be_completed.concat(AepTrackerQuery?.data?.completed)
      console.log(AepTrackerQuery)
      setStoreAepData(tempArr)
    }
     



  },[AepTrackerQuery])

  

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={storeAepData}
      isLoading={AepTrackerQuery?.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
    
    />
  );
}
