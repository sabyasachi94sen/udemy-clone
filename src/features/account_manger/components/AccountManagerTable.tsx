import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo,useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useStoreData } from "@/shared/stores/modal.store";
import { Account } from "@/api";
import { BaseTable, IconButton,RowNavigate,StatusCell } from "@/shared/components";
import { useAccountManager ,useAccountManagerActivities } from "@/shared/services/account-manager.service";
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
  
}: AccountManagerTableProps): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const accountManagerQuery = useAccountManager({ page });

  const {setStoreData}=useStoreData()

 
    

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
          router.push(`/account-manager/${info.row.original.id}`)
          setLocalStorage("studentId",info.row.original.id)
          setLocalStorage("managerName",info.getValue())
        }
        } 
        rowValue={info.getValue()} />),
      }),
     
      columnHelper.accessor((row) => row.last_update, {
        id: "last_update",
        header: "Last update",
        cell: (info) => (info.getValue() ? formatDate(info.getValue()) : null),
      }),
      columnHelper.accessor((row) => row.is_active, {
        id: "is_active",
        header: "Active Status",
        cell: (info) => (
          <StatusCell
            rowValue={info.getValue() === true ? "Active" : "Inactive"}
            statusColor={info.getValue() === true ? "active" : "inactive"}
          />
        ),
      }),
      columnHelper.accessor((row) => row.student_count, {
        id: "student_count",
        header: "Students",
        cell: (info) => info.getValue(),
      
      }),


      columnHelper.accessor((row) => row.id, {
        id: "edit",
        header: "Edit",
        cell: (info) => (
          <IconButton
            toolTipText="Edit"
            onClick={() => onUpdate(info.row.original)}
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
            onClick={() => onDelete(info.row.original)}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
        ),
      }),
    ],
    [],
  );


  const { storedData, setStoredData } = useStoreData();



  useEffect(() => {
    setStoredData({name:"sabya"});
  }, []);
 
  

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