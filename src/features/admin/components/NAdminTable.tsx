/* eslint-disable react/no-unstable-nested-components */
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React from "react";

import { Account } from "@/api";
import {
  BaseTable,
  Button,
  StatusCell,
  TableRowCell,
} from "@/shared/components";
import { useSuperAdmins } from "@/shared/services/super-admin.service";
import { formatDate } from "@/shared/utils";

interface NewSuperAdminTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
}

export function NewSuperAdminTable({
  onDelete,
  onUpdate,
}: NewSuperAdminTableProps): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const superAdminsQuery = useSuperAdmins({ page });

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: ColumnDef<Account, any>[] = [
    columnHelper.accessor((row) => row.username, {
      id: "username",
      header: "Name",
      cell: (info) => <TableRowCell rowValue={info.getValue()} />,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      header: "Email",
      cell: (info) => <TableRowCell rowValue={info.getValue()} />,
    }),
    columnHelper.accessor((row) => row.last_update, {
      id: "last_update",
      header: "Last update",
      cell: (info) => <TableRowCell rowValue={formatDate(info.getValue())} />,
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
      header: "",
      cell: (info) => (
        <Button width="max" onClick={() => onUpdate(info.row.original)}>
          Edit
        </Button>
      ),
    }),
    columnHelper.accessor((row) => row.id, {
      id: "delete",
      header: "",
      cell: (info) => (
        <Button width="max" onClick={() => onDelete(info.row.original)}>
          Delete
        </Button>
      ),
    }),
  ];

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
