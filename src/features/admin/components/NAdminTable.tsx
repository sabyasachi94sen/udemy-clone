import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";

import { Button } from "@/shared/components";
import { BaseTable } from "@/shared/components/libs/BaseTable/BaseTable";

interface NAdminTableProps {}

interface TableDate {
  title: string;
  id: string;
}

export function NAdminTable({}: NAdminTableProps): JSX.Element {
  const columns = useMemo<ColumnDef<TableDate>[]>(
    () => [
      {
        header: "Partition ID",
        accessorKey: "title",
        cell: (info) => (
          <div className="px-1">
            <Button onClick={() => console.log(info.getValue())}>
              {info.getValue()}
            </Button>
          </div>
        ),
      },
      {
        header: "Total Messages",
        accessorKey: "id",
        cell: (info) => (
          <div className="px-1">
            <Button
              variant="outlined"
              onClick={() => console.log(info.getValue())}
            >
              {info.getValue()}
            </Button>
          </div>
        ),
      },
    ],
    [],
  );

  const [pageCount] = useState(5);

  const router = useRouter();

  const { page, perPage } = router.query;

  const tableResult = useQuery(
    ["key", { page, perPage }],
    async () =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`,
      ),
    {
      keepPreviousData: true,
    },
  );

  return (
    <BaseTable
      columns={columns}
      data={tableResult?.data?.data}
      isLoading={tableResult.isLoading}
      pageCount={pageCount}
    />
  );
}
