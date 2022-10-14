import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RowNavigate } from "@/shared/components";
import { Account } from "@/api";
import { BaseTable, IconButton, StatusCell ,ViewButton} from "@/shared/components";

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
 

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.student_name, {
        id: "student_name",
        header: "Name",
        cell: (info)=>info.getValue(),
      }),
      columnHelper.accessor((row) => row.date_of_birth, {
        id: "date_of_birth",
        header: "Date of Birth",
        cell: (info) => (info.getValue() ? formatDate(info.getValue()) : null),
      }),
      columnHelper.accessor((row) => row?.student_city_residence[0]?.country_of_residence, {
        id: "country",
        header: "Country of Residence",
        cell: (info) => (info.getValue()),
      }),
      columnHelper.accessor((row) => row?.student_assignment[0]?.account_manager?.username, {
        id: "account_manager",
        header: "Account Manager",
        cell: (info) => (
          info.getValue()
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
    [],
  );

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={studentQuery?.data}
      isLoading={studentQuery?.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
      
    />
  );
}