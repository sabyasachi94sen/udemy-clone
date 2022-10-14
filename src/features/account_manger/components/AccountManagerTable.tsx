import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo,useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useStoreData } from "@/shared/stores/modal.store";
import { Account } from "@/api";
import { BaseTable, IconButton,RowNavigate,StatusCell } from "@/shared/components";

import { formatDate } from "@/shared/utils";
import { setLocalStorage } from "@/features/helpers";


interface AccountManagerTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
  showManagerActivities: ()=>void
}

export function AccountManagerTable({
  onDelete,
  onUpdate,
  accountManagerQuery,
  page,
  isSearch
  
}: AccountManagerTableProps): JSX.Element {


  const router = useRouter();

 
    

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.manager_name, {
        id: "manager_name",
        header: "Name",
        cell: (info) => (
        <RowNavigate rowLink={(row)=>{
          router.push(`/account-manager/${info.row.original.account.id}`)
          setLocalStorage("studentId",info.row.original.account.id)
          setLocalStorage("managerName",info.getValue())
        }
        } 
        rowValue={info.getValue()} />),
      }),
     
      columnHelper.accessor((row) => row.last_update, {
        id: "last_update",
        header: "Last update",
        cell: (info) => (info.getValue() ? <div className="pl-1">{formatDate(info.getValue())}</div> : null)
      }),
      columnHelper.accessor((row) => row.is_active, {
        id: "is_active",
        header: "Active Status",
        cell: (info) => (
          <div className="pl-2">
          <StatusCell
            rowValue={info.getValue() === true ? "Active" : "Inactive"}
            statusColor={info.getValue() === true ? "active" : "inactive"}
          />
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.student_count, {
        id: "student_count",
        header: "Students",
        cell: (info) => <div className="pl-7">{info.getValue()}</div>,
      
      }),


      columnHelper.accessor((row) => row.id, {
        id: "edit",
        header: "Edit",
        cell: (info) => (
          <div className="pl-2">
          <IconButton
            toolTipText="Edit"
            onClick={() => {onUpdate(info.row.original)
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
            onClick={() =>{ onDelete(info.row.original)
            
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
      data={accountManagerQuery?.data}
      isLoading={accountManagerQuery?.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
    
    
    />
  );
}