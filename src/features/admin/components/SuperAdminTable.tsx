import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import { Account } from "@/api";
import { BaseTable, IconButton, StatusCell } from "@/shared/components";
import { useSuperAdmins } from "@/shared/services/super-admin.service";
import { formatDate } from "@/shared/utils";

interface SuperAdminTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
}

export function SuperAdminTable({
  onDelete,
  onUpdate,
}: SuperAdminTableProps): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const superAdminsQuery = useSuperAdmins({ page });

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.username, {
        id: "username",
        header: "Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: "Email",
        cell: (info) => info.getValue(),
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

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={superAdminsQuery.data?.results}
      isLoading={superAdminsQuery.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
      totalResultsCount={superAdminsQuery.data?.count || 0}
    />
  );
}
