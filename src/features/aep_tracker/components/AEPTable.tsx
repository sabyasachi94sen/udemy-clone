import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState} from "react";
import { MdDeleteOutline } from "react-icons/md";

import { Account } from "@/api";
import { BaseTable, IconButton ,StatusCell,Checkbox,Input,RowNavigate} from "@/shared/components";
import { useAepTracker } from "@/shared/services/aep-tracker.service";
import { formatDate } from "@/shared/utils";


export function AEPTable({
  onView
}): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const AepTrackerQuery = useAepTracker({ page });
  // const updateCompleteMutation = useUpdateComplete();


  console.log(AepTrackerQuery)

  const columnHelper = createColumnHelper<Account>();

  const [storeAepData,setStoreAepData]=useState([])

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
          <StatusCell
          rowValue={info.getValue() === true ? "Active" : "Inactive"}
          statusColor={info.getValue() === true ? "active" : "inactive"}
        />
        ),
      }),

      columnHelper.accessor((row) => row.is_completed, {
        id: "is_complete",
        header: "Complete",
        cell: (info) => (
         <Checkbox size={"lg"} isChecked={info.getValue()} />
        ),
      }),




      columnHelper.accessor((row) => row.remarks, {
        id: "status",
        header: "Status",
        cell: (info) => (
           <Input  className="w-[130%] h-[4vh] rounded-lg bg-cyan-500" defaultValue={info.getValue()} />
        ),
      }),
    ],
    [],
  );


  useEffect(()=>{
       
    var tempArr=[];

    if(AepTrackerQuery.isSuccess){
    const not_completed=AepTrackerQuery?.data?.yet_to_be_completed;

     for(let i=not_completed.length-1;i>=0;i--)
     tempArr.push(not_completed[i])

     const completed=AepTrackerQuery?.data?.completed;

     for(let j=completed.length-1;j>=0;j--)
     tempArr.push(completed[j])

     setStoreAepData(tempArr)
    }
     



  },[AepTrackerQuery?.isSuccess])

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
