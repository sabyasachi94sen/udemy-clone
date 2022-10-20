import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import router, { useRouter } from "next/router";
import React, { useMemo } from "react";

import { Account } from "@/api";
import { getLocalStorage, setLocalStorage } from "@/features/helpers";
import { BaseTable, CompleteBar } from "@/shared/components";

import { ModalState, useModal } from "@/shared/stores/modal.store";
import { formatDate } from "@/shared/utils";


export function AdminActivityTable({adminActivity,page}): JSX.Element {
 

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
        cell: (info) => <div className="hover:underline cursor-pointer" onClick={()=>{
          router.push(`/academic-list/${info.row.original.student.id}`)
          setLocalStorage("studentId",info.row.original.student.id)
          setLocalStorage("studentName",info.row.original.student.student_name)
        }}>{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row.activity_count, {
        id: "activities",
        header: "Activities in AEP",
        cell: (info) => <div className="pl-14">{info.getValue()}</div>,
      }),

      columnHelper.accessor((row) => row.last_update, {
        id: "last_update",
        header: "Last update",
        cell: (info) => (info.getValue() ? <div className="pl-2">{formatDate(info.getValue())}</div> : null),
      }),
      columnHelper.accessor((row) => row.completion_status, {
        id: "completion_status",
        header: "Completion Status",
        cell: (info) => <CompleteBar rowValue={info.getValue()} />,
      }),
    ],
    [],
  );

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={adminActivity?.isSuccess && adminActivity?.data}
      isLoading={adminActivity?.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
    />
  );
}
