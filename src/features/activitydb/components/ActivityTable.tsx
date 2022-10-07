import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo,useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useStoreData } from "@/shared/stores/modal.store";
import { Account } from "@/api";
import { BaseTable, Button, IconButton,RowNavigate,StatusCell,ViewButton } from "@/shared/components";
import { useActivityList } from "@/shared/services/activity.service";
import { formatDate } from "@/shared/utils";


interface ActivityTableProps {
  onViewActivity: ()=>void;
  onUpdateActivity: ()=>void;
  onDeleteActivity: ()=>void;
  onViewActionMap: ()=>void;
}

export function ActivityTable({
   onViewActivity,
   onUpdateActivity,
   onDeleteActivity,
   onViewActionMap,
  
}: ActivityTableProps): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const activityListQuery = useActivityList({ page });
  console.log(activityListQuery)

  const {setStoreData}=useStoreData()

 
    

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.activity_name, {
        id: "activity_name",
        header: "Name",
        cell: (info) => (info.getValue()),
      }),
     
      columnHelper.accessor((row) => row.activity_type, {
        id: "activity_type",
        header: "Type",
        cell: (info) => (info.getValue()),
      }),
      columnHelper.accessor((row) => row.subject, {
        id: "subject",
        header: "Subject",
        cell: (info) => (
           info.getValue()
        ),
      }),
      columnHelper.accessor((row) => row.application_deadline, {
        id: "application_deadline",
        header: "Application Deadline",
        cell: (info) => (
           info.getValue()
        ),
      }),



      columnHelper.accessor((row) => row.id, {
        id: "action_map",
        header: "Action Map",
        cell: (info) => (<Button width="w-[90%]" className="h-[7vh] bg-cyan-500 rounded-lg hover:bg-blue-500" onClick={()=>onViewActionMap(info.row.original)}>See action map</Button>),
      
      }),
      columnHelper.accessor((row) => row.id, {
        id: "details",
        header: "Details",
        cell: (info) => (<ViewButton onClick={()=>onViewActivity(info.row.original)}/>),
      
      }),


      columnHelper.accessor((row) => row.id, {
        id: "edit",
        header: "Edit",
        cell: (info) => (
          <IconButton
            toolTipText="Edit"
            onClick={() => onUpdateActivity(info.row.original)}
          >
            <FaUserEdit className="text-xl text-neutral text-opacity-80" />
          </IconButton>
        ),
      }),
      columnHelper.accessor((row) => row.id, {
        id: "delete",
        header: "Delete",
        cell: (info) => (
          <IconButton
            toolTipText="Delete"
            onClick={() => onDeleteActivity(info.row.original)}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
        ),
      }),
    ],
    [],
  );


  
 
  

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={activityListQuery?.data?.results}
      isLoading={activityListQuery?.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
    
    
    />
  );
}
