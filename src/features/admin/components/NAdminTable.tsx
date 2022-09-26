import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID

    // Set the loading state
    setLoading(true);

    const d = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=${pageSize}`,
    );

    setData(d.data);

    // Your server could send back total page count.
    // For now we'll just fake it, too
    setPageCount(50);

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData({ pageSize: 10, pageIndex: 0 });
  }, []);

  return (
    <BaseTable
      {...{
        data,
        pageCount: 100,
        columns,
      }}
    />
  );
}
