import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";

import { BaseTable } from "@/shared/components/libs/Table/BaseTable";

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
      },
      {
        header: "Total Messages",
        accessorKey: "id",
      },
    ],
    [],
  );

  const [pageCount, setPageCount] = useState(0);

  const router = useRouter();

  const { pageIndex, pageSize } = router;
  const tableResult = useQuery(["key"], async () =>
    axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=${pageSize}`,
    ),
  );

  console.log(
    "file: NAdminTable.tsx ~ line 38 ~ NAdminTable ~ tableResult",
    tableResult?.data,
  );
  // useEffect(() => {
  //   fetchData({ pageSize: 50 || 10, pageIndex: pageIndex || 0 }).then(() => {
  //     console.log(data);
  //   });
  // }, [pageSize, pageIndex]);

  return (
    <BaseTable
      {...{
        data: tableResult?.data,
        pageCount,
        columns,
      }}
    />
  );
}
