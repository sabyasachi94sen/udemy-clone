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

export function AcademicTable({ onView,AepListQuery,page,viewStudent }): JSX.Element {

  
  const [deviceWidth,setDeviceWidth]=useState(window.screen.width);
  const [zoomVal,setZoomVal]=useState(Math.round(window.devicePixelRatio*100))
 

  window.onresize=function(){
    console.log(Math.round(window.devicePixelRatio*100))
    setDeviceWidth(Math.round(window.screen.width))
    setZoomVal(Math.round(window.devicePixelRatio*100))
  
  }

  const getManagerHeader=()=>{
      
   
    if(deviceWidth>=1656)
    return <div className="w-[190%] text-center">Account Manager</div>

    else if(deviceWidth>=1600 && deviceWidth<1656)
    return <div className="w-[180%] text-center">Account Manager</div>

    if(deviceWidth>=1536 && deviceWidth<1600 && zoomVal===125)
    return <div className="w-[160%] text-center">Account Manager</div>

    else if(zoomVal===113 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[190%] text-center">Account Manager</div>

    else if(zoomVal===100 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[230%] text-center">Account Manager</div>

    else if(zoomVal===138 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[140%] text-center">Account Manager</div>

    else if(zoomVal===94 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[250%] text-center">Account Manager</div>
    else if(zoomVal===125 && deviceWidth>=1500 && deviceWidth<1536)
    return <div className="w-[160%] text-center">Account Manager</div>

    else if(deviceWidth>=1349 && deviceWidth<1500)
    return <div className="w-[140%] text-center">Account Manager</div>

    else if(deviceWidth>=1300 && deviceWidth<1349)
    return <div className="w-[140%] text-center">Account Manager</div>

    else
    return <div className="">Account Manager</div>
  }

  // const updateCompleteMutation = useUpdateComplete();

    const router=useRouter()
    

  const columnHelper = createColumnHelper<Account>();

  const [storeAepData, setStoreAepData] = useState([]);

  const getCountryHeader=()=>{

    if(deviceWidth>=1656)
    return <div className="w-[250%] text-center">Country of residence</div>

    else if(deviceWidth>=1600 && deviceWidth<1656)
    return <div className="w-[240%] text-center">Country of residence</div>

    if(deviceWidth>=1536 && deviceWidth<1600 && zoomVal===125)
    return <div className="w-[210%] text-center">Country of residence</div>



    else if(zoomVal===113 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[255%] text-center">Country of residence</div>

    else if(zoomVal===100 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[290%] text-center">Country of residence</div>

    else if(zoomVal===138 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[200%] text-center">Country of residence</div>

    else if(zoomVal===94 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[330%] text-center">Country of residence</div>
     
  
    else if(deviceWidth>=1500 && deviceWidth<1536 && zoomVal===125)
    return <div className="w-[230%] text-center">Country of residence</div>

    else if(deviceWidth>=1349 && deviceWidth<1500)
    return <div className="w-[180%] text-center">Country of residence</div>

    else if(deviceWidth>=1300 && deviceWidth<1349)
    return <div className="w-[190%] text-center">Country of residence</div>

    else
    return <div className="">Country of residence</div>
  }




  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.student?.student_name, {
        id: "student_name",
        header: "Student Name",
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
      columnHelper.accessor((row) => row.account_manager?.username, {
        id: "manager_name",
        header: <div>Assigned Staff</div> ,
        cell: (info) => <div className="whitespace-pre-wrap">{info.getValue()}</div>,
      }),



columnHelper.accessor((row) => row.activity_count, {
        id: "activity_count",
        header: "No. of Activity",
        cell: (info) => <div className="pl-12">{info.getValue()}</div>,
      }),




      // columnHelper.accessor((row) => row.student?.date_of_birth, {
      //   id: "date_of_birth",
      //   header: "Date of Birth",
      //   cell: (info) => <div className="pl-3">{info.getValue()!=null?formatDate(info.getValue()): null}</div>,
      // }),
      // columnHelper.accessor((row) => row?.student?.country_of_citizenship, {
      //   id: "country",
        
      //   header: getCountryHeader(),
      //   cell: (info) => <div className="text-center">{info.getValue()}</div>,
      // }),
     
      columnHelper.accessor((row) => row.id, {
        id: "details",
        header: "Details",
        cell: (info) => (
  
        <img onClick={() => viewStudent({...info.row.original.student,account_manager:{...info.row.original.account_manager}})} src={"https://thumbs.dreamstime.com/b/info-icon-information-sign-speech-bubble-symbol-i-letter-vector-illustration-125540368.jpg"} className="w-[1.5rem] h-[1.5rem] cursor-pointer ml-4" />
        
        ),
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
    [zoomVal,deviceWidth],
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
