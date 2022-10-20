import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { useStoreData } from "@/shared/stores/modal.store";
import React, { useMemo ,useEffect} from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { us } from "@/shared/stores/modal.store";
import { ModalState, useModal } from "@/shared/stores/modal.store";

import { Account } from "@/api";
import { BaseTable, CompleteBar, IconButton,RowNavigate,StatusCell } from "@/shared/components";

import { formatDate } from "@/shared/utils";
import {getLocalStorage} from "@/features/helpers"

interface AccountManagerTableProps {
   page: number;
   accountManagerActivity: {}[];
}

export function AccountManagerActivityTable({ accountManagerActivity,page}): JSX.Element {

   const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;


    

  
  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row?.student?.student_name, {
        id: "student_name",
        header: "Student Name",
        cell: (info) => (info.getValue()),
      }),
      columnHelper.accessor((row) => row.activity_count, {
        id: "activity_aep",
        header: "Activities in AEP",
        cell: (info) => <div className="pl-14">{info.getValue()}</div>,
      }),
     
      columnHelper.accessor((row) => row.last_update, {
        id: "last_update",
        header: "Last update",
        cell: (info) => (info.getValue() ? <div className="pl-2">{formatDate(info.getValue())}</div> : null),
      }),
      columnHelper.accessor((row) => row.completion_status, {
        id: "is_active",
        header: "Completion Status",
        cell: (info) => (
          <CompleteBar rowValue={info.getValue()}/>
        ),
      }),
     
    ],
    [],
  );


  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={accountManagerActivity && accountManagerActivity?.data}
      isLoading={accountManagerActivity?.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
    
    
    />
  );
}
