import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo,useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useStoreData } from "@/shared/stores/modal.store";
import { Account } from "@/api";
import { BaseTable, Button, IconButton,RowNavigate,StatusCell,ViewButton } from "@/shared/components";
import { setLocalStorage } from "@/features/helpers";
import { CheckActionMap } from "@/shared/components/libs/BaseTable/TableRow";



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
   activityListQuery,
   page,
   isSearch,
  
}: ActivityTableProps): JSX.Element {
  
  


  

 
    

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.activity_name, {
        id: "activity_name",
        header: "Activity Name",
        cell: (info) => (info.getValue()),
      }),
     
      columnHelper.accessor((row) => row.activity_type, {
        id: "activity_type",
        header: <div className="pl-24">Type</div>,
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row.subject, {
        id: "subject",
        header: <div className="pl-20">Subject</div>,
        cell: (info) => (
           <span className="text-center block mx-auto w-[110%]">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor((row) => row.application_deadline, {
        id: "application_deadline",
        header: <div className="w-[130%] xl:w-[150%] text-center">Application Deadline</div>,
        cell: (info) => (
           <span className="w-[130%] mx-auto block text-center">{info.getValue()!=null?formatDate(info.getValue()): null}</span>
        ),
      }),



      columnHelper.accessor((row) => row.id, {
        id: "action_map",
        header: <span className="relative left-10">Action Map</span>,
        cell: (info) => (<Button width="w-[90%]" className="h-[5vh] bg-cyan-500 rounded-lg hover:bg-blue-500 font-bolder"
         onClick={()=>{
          
          onViewActionMap(info.row.original)
          setLocalStorage("activityName",info.row.original.activity_name)
        }}
        
          >
            View/edit action map</Button>),
      
      }),
      columnHelper.accessor((row) => row.action_maps, {
        id: "action_map_exist",
        header: "Action map setting",
       
        cell: (info) => (<CheckActionMap actionMap={info.getValue()} />)
        
         
      
      }),
      columnHelper.accessor((row) => row.id, {
        id: "details",
        header: "Details",
        cell: (info) => (<img onClick={()=>onViewActivity(info.row.original)} src={"https://thumbs.dreamstime.com/b/info-icon-information-sign-speech-bubble-symbol-i-letter-vector-illustration-125540368.jpg"} className="w-[1.5rem] h-[1.5rem] ml-4 cursor-pointer" />)
        
      
      }),


      columnHelper.accessor((row) => row.id, {
        id: "edit",
        header: "Edit",
        cell: (info) => (
          <div className="pl-2">
          <IconButton
            toolTipText="Edit"
            onClick={() =>{ onUpdateActivity(info.row.original)
            isSearch()
            
            }}
          >
            <FaUserEdit className="text-xl text-neutral text-opacity-80" />
          </IconButton>
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.id, {
        id: "delete",
        header: "Delete",
        cell: (info) => (
          <div className="pl-4">
          <IconButton
            toolTipText="Delete"
            onClick={() =>{ onDeleteActivity(info.row.original)
              isSearch()
            }}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
          </div>
        ),
      }),
    ],
    [],
  );


  
 
  

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={activityListQuery.isSuccess && activityListQuery?.data?.results}
      isLoading={activityListQuery?.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
    
    
    />
  );
}
