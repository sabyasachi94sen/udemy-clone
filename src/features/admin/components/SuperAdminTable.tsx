import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { memo, useCallback, useMemo,useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import moment from "moment";

import { MdDeleteOutline } from "react-icons/md";

import { Account } from "@/api";
import { BaseTable, IconButton, StatusCell } from "@/shared/components";

import { formatDate } from "@/shared/utils";
import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";

interface SuperAdminTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
  
}

export const SuperAdminTable=(({
  onDelete,
  onUpdate,
  superAdminsQuery,
  page,
  isSearch
}: SuperAdminTableProps) => {



  const [deviceWidth,setDeviceWidth]=useState(window.screen.width);
  const [zoomVal,setZoomVal]=useState(Math.round(window.devicePixelRatio*100))

  window.onresize=function(){
    console.log(Math.round(window.devicePixelRatio*100))
    setDeviceWidth(Math.round(window.screen.width))
   
    setZoomVal(Math.round(window.devicePixelRatio*100))
  
  }

  const getEmail=()=>{
      
    if(deviceWidth>=2560)
    return <div className="w-[1400%] text-center">Email</div>
    if(deviceWidth>=1920 && deviceWidth<2560)
    return <div className="w-[950%] text-center">Email</div>
   else if(deviceWidth>=1656 && deviceWidth<1920)
    return <div className="w-[800%] text-center">Email</div>

    else if(deviceWidth>=1600 && deviceWidth<1656)
    return <div className="w-[700%] text-center">Email</div>

    if(deviceWidth>=1536 && deviceWidth<1600 && zoomVal===125)
    return <div className="w-[600%] text-center">Email</div>

    else if(zoomVal===113 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[700%] text-center">Email</div>

    else if(zoomVal===100 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[850%] text-center">Email</div>

    else if(zoomVal===138 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[500%] text-center">Email</div>

    else if(zoomVal===94 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[390%] text-center">Email</div>

    else if(deviceWidth>=1349 && deviceWidth<1536)
    return <div className="w-[600%] text-center">Email</div>

    else if(deviceWidth>=1300 && deviceWidth<1349)
    return <div className="w-[500%] text-center">Email</div>

    else
    return <div className="">Email</div>
  }


  const getName=()=>{
      
    if(deviceWidth>=2560)
    return <div className="w-[700%] text-center">Staff name</div>
    if(deviceWidth>=1920 && deviceWidth<2560)
    return <div className="w-[480%] text-center">Staff name</div>
   else if(deviceWidth>=1656 && deviceWidth<1920)
    return <div className="w-[410%] text-center">Staff name</div>

    else if(deviceWidth>=1600 && deviceWidth<1656)
    return <div className="w-[380%] text-center">Staff name</div>

    if(deviceWidth>=1536 && deviceWidth<1600 && zoomVal===125)
    return <div className="w-[350%] text-center">Staff name</div>

    else if(zoomVal===113 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[400%] text-center">Staff name</div>

    else if(zoomVal===100 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[470%] text-center">Staff name</div>

    else if(zoomVal===138 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[300%] text-center">Staff name</div>

    else if(zoomVal===94 && deviceWidth>=1536 && deviceWidth<1600)
    return <div className="w-[390%] text-center">Staff name</div>

    else if(deviceWidth>=1349 && deviceWidth<1536)
    return <div className="w-[320%] text-center">Staff name</div>

    else if(deviceWidth>=1300 && deviceWidth<1349)
    return <div className="w-[280%] text-center">Staff name</div>

    else
    return <div className="">Staff name</div>
  }

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.username, {
        id: "username",
        header: "staff name",
        cell: (info) => <div className="">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: "email",
        cell: (info) => <div className="">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row.last_login, {
        id: "last_login",
        header: "Last Login",
        cell: (info) => (info.getValue() ? <div className="pl-1">{moment(info.getValue()).utc().format("DD/MM/YYYY")}</div> : null),
      }),
      columnHelper.accessor((row) => row.is_active, {
        id: "is_active",
        header: "Active Status",
        cell: (info) => (
          <div className="pl-3">
          <StatusCell
            rowValue={info.getValue() === true ? "Active" : "Inactive"}
            statusColor={info.getValue() === true ? "active" : "inactive"}
          />
          </div>
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
              isSearch()
              onUpdate(info.row.original)}}
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
            onClick={() => {
              onDelete(info.row.original)
              isSearch()
            }}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
          </div>
        ),
      }),
    ],
    [deviceWidth,zoomVal],
  );



  return (
    <>

      <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={superAdminsQuery?.data}
      isLoading={superAdminsQuery.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
      totalResultsCount={superAdminsQuery.data?.count || 0}
    />
    </>
  );
})
