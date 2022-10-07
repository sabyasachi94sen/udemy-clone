import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import {setLocalStorage} from "@/features/helpers"

import { Account } from "@/api";
import {
  BaseTable,
  IconButton,
  StatusCell,
  Checkbox,
  Input,
  RowNavigate,
} from "@/shared/components";
import { useAepList } from "@/shared/services/aep.service";
import { formatDate } from "@/shared/utils";
import { useStoreData } from "@/shared/stores/modal.store";

export function AcademicTable({ onView }): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const AepListQuery = useAepList({ page });
  // const updateCompleteMutation = useUpdateComplete();

  const { setStoredData } = useStoreData();

  const columnHelper = createColumnHelper<Account>();

  const [storeAepData, setStoreAepData] = useState([]);

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.student?.student_name, {
        id: "student_name",
        header: "Name",
        cell: (info) => (
          <RowNavigate
            onClick={() => storeStudentName(info.getValue())}
            rowLink={() => {
              router.push(`/academic-list/${info.row.original?.student?.id}`);
              setStoredData({ studentName: info.getValue() });
              setLocalStorage("studentId",info.row.original?.student?.id)
            }}
            rowValue={info.getValue()}
          />
        ),
      }),
      columnHelper.accessor((row) => row.student?.date_of_birth, {
        id: "date_of_birth",
        header: "Date of Birth",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.student?.country_of_citizenship, {
        id: "country",
        header: "Country of residence",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.account_manager?.username, {
        id: "manager_name",
        header: "Account Manager",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor((row) => row?.is_active, {
        id: "is_active",
        header: "Active",
        cell: (info) => (
          <StatusCell
            rowValue={info.getValue() === true ? "Active" : "Inactive"}
            statusColor={info.getValue() === true ? "active" : "inactive"}
          />
        ),
      }),
    ],
    [],
  );

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={AepListQuery?.data}
      isLoading={AepListQuery?.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
    />
  );
}
