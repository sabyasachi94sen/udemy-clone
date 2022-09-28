import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import { Account } from "@/api";
import { BaseTable, Button, TableRowCell } from "@/shared/components";
import { useSuperAdmins } from "@/shared/services/super-admin.services";

export function NewSuperAdminTable({}: NewSuperAdminTableProps): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const superAdminsResult = useSuperAdmins();

  const columns = useMemo<ColumnDef<Account>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "id",

        cell: (info) => <TableRowCell rowValue={info.getValue()} />,
      },
      {
        header: "Email",
        accessorKey: "id",
        cell: (info) => <TableRowCell rowValue={info.getValue()} />,
      },
      {
        header: "Last update",
        accessorKey: "id",
        cell: (info) => <TableRowCell rowValue={info.getValue()} />,
      },
      {
        header: "Active Status",
        accessorKey: "id",
        cell: (info) => <TableRowCell rowValue={info.getValue()} />,
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
      data={superAdminsResult.data?.results}
      isLoading={superAdminsResult.isLoading}
      pageCount={superAdminsResult?.data?.count}
    />
  );
}
