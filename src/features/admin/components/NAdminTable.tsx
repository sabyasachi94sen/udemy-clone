/* eslint-disable react/no-unstable-nested-components */
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import { Account } from "@/api";
import {
  BaseTable,
  Button,
  StatusCell,
  TableRowCell,
} from "@/shared/components";
import { useSuperAdmins } from "@/shared/services/super-admin.services";
import { formatDate } from "@/shared/utils";

export function NewSuperAdminTable({}: NewSuperAdminTableProps): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const superAdminsResult = useSuperAdmins();

  const columnHelper = createColumnHelper<Account>();

  const columns = [
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
      cell: (info) => <TableRowCell rowValue={info.getValue()} />,
    }),
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: "",
      cell: (info) => (
        <Button width="max" onClick={() => console.log(info.getValue())}>
          Edit
        </Button>
      ),
    }),
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: "",
      cell: (info) => (
        <Button width="max" onClick={() => console.log(info.getValue())}>
          Delete
        </Button>
      ),
    }),
  ];

  const columnsA = useMemo<ColumnDef<Account>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "username",
        cell: (info) => <TableRowCell rowValue={info.getValue()} />,
      },
      {
        header: "Email",
        accessorKey: "email",
        cell: (info) => <TableRowCell rowValue={info.getValue()} />,
      },
      {
        header: "Last update",
        accessorKey: "last_update",
        cell: (info) => <TableRowCell rowValue={formatDate(info.getValue())} />,
      },
      {
        header: "Active Status",
        accessorKey: "username",
        cell: (info) => <StatusCell rowValue={info.getValue() === "ac"} />,
      },
      {
        header: "",
        accessorKey: "id",
        cell: (info) => (
          <Button width="max" onClick={() => console.log(info.getValue())}>
            Edit
          </Button>
        ),
      },
      {
        header: "",
        accessorKey: "id",
        cell: (info) => (
          <Button width="max" onClick={() => console.log(info.getValue())}>
            Delete
          </Button>
        ),
      },
      // {
      //   header: "Total Messages",
      //   accessorKey: "title",
      //   cell: (info) => <TableRowCell rowValue={info.getValue()} />,
      // },
    ],
    [],
  );

  if (superAdminsResult.isLoading && !superAdminsResult.data) {
    return null;
  }

  return (
    <BaseTable
      columns={columns}
      currentPage={Number(page) || 1}
      data={superAdminsResult.data?.results}
      isLoading={superAdminsResult.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
      totalResultsCount={superAdminsResult.data?.count || 0}
    />
  );
}
