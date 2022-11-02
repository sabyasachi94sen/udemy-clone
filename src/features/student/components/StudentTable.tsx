import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RowNavigate } from "@/shared/components";
import { Account } from "@/api";
import { BaseTable, IconButton, StatusCell ,ViewButton} from "@/shared/components";
import { useState } from "react";


import { formatDate } from "@/shared/utils";


interface AdminTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
  onView: (user: Account)=>void;
}

export function StudentTable({
  onDelete,
  onUpdate,
  onView,
  studentQuery,
  page,
  isSearch
}: StudentTableProps): JSX.Element {


  const [deviceWidth,setDeviceWidth]=useState(window.screen.width);
  const [zoomVal,setZoomVal]=useState(Math.round(window.devicePixelRatio*100))
 

  window.onresize=function(){
    console.log(Math.round(window.devicePixelRatio*100))
    setDeviceWidth(Math.round(window.screen.width))
    setZoomVal(Math.round(window.devicePixelRatio*100))
  
  }

  const getStaffHeader=()=>{
      
   
    if(deviceWidth>=1656)
    return <div className="w-[310%] text-center">Assigned Staff</div>

    else if(deviceWidth>=1600 && deviceWidth<1656)
    return <div className="w-[290%] text-center">Assigned Staff</div>

    if(deviceWidth>=1536 && deviceWidth<1600 && zoomVal===125)
    return <div className="w-[260%] text-center">Assigned Staff</div>

    else if(zoomVal===113 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[300%] text-center">Assigned Staff</div>

    else if(zoomVal===100 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[360%] text-center">Assigned Staff</div>

    else if(zoomVal===138 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[230%] text-center">Assigned Staff</div>

    else if(zoomVal===94 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[390%] text-center">Assigned Staff</div>

    else if(deviceWidth>=1349 && deviceWidth<1536)
    return <div className="w-[220%] text-center">Assigned Staff</div>

    else if(deviceWidth>=1300 && deviceWidth<1349)
    return <div className="w-[220%] text-center">Assigned Staff</div>

    else
    return <div className="">Assigned Staff</div>
  }
  const columnHelper = createColumnHelper<Account>();

 
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.student_name, {
        id: "student_name",
        header: "Student Name",
        cell: (info)=>info.getValue(),
      }),
   
      columnHelper.accessor((row) => row?.activity_count, {
        id: "activity_count",
        header: "No of Activities",
        cell: (info) => (
          <div className="pl-14">{info.getValue()}</div>
        ),
      }),
      columnHelper.accessor((row) => row?.student_assignment[0]?.account_manager?.username, {
        id: "account_manager",
        header: getStaffHeader(),
        cell: (info) => (
          <div className="w-[100%] text-center">{info.getValue()}</div>
        ),
      }),
      columnHelper.accessor((row) => row.id, {
        id: "details",
        header: "Details",
        cell: (info) => (
  
        <img onClick={() => onView(info.row.original)} src={"https://thumbs.dreamstime.com/b/info-icon-information-sign-speech-bubble-symbol-i-letter-vector-illustration-125540368.jpg"} className="w-[1.5rem] h-[1.5rem] cursor-pointer ml-4" />
        
        ),
      }),

      columnHelper.accessor((row) => row.id, {
        id: "edit",
        header: "Edit",
        cell: (info) => (
          <div className="pl-2">
          <IconButton
            toolTipText="Edit"
            onClick={() => {
              onUpdate(info.row.original)
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
            onClick={() => {onDelete(info.row.original)
            isSearch()
            }}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
          </div>
        ),
      }),
    ],
    [zoomVal,deviceWidth],
  );

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={studentQuery?.data}
      isLoading={studentQuery?.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
      
    />
  );
}