import axios from "axios";
import { useMemo, useState, useCallback } from "react";

import { Table } from "./Table";

export type TableContainerProps = {};
export function TableContainer(): JSX.Element {
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Body",
        accessor: "id",
      },
    ],
    []
  );

  // We'll start our table without any data
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
      `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=${pageSize}`
    );

    setData(d.data);

    // Your server could send back total page count.
    // For now we'll just fake it, too
    setPageCount(50);

    setLoading(false);
  }, []);

  return (
    <div className="max-w-4xl">
      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
    </div>
  );
}
