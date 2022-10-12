import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import { Account } from "@/api";
import { getLocalStorage } from "@/features/helpers";
import { BaseTable, CompleteBar } from "@/shared/components";
import { useAdminActivity } from "@/shared/services/admin.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { formatDate } from "@/shared/utils";


export function AdminActivityTable(): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;


  const adminId = getLocalStorage("adminInfo");

  const adminActivity = useAdminActivity(adminId);

  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.student, {
        id: "student_name",
        header: "Student Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.activity_count, {
        id: "activities",
        header: "Activities in AEP",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor((row) => row.last_update, {
        id: "last_update",
        header: "Last update",
        cell: (info) => (info.getValue() ? formatDate(info.getValue()) : null),
      }),
      columnHelper.accessor((row) => row.completion_status, {
        id: "completion_status",
        header: "Completion Status",
        cell: (info) => <CompleteBar rowValue={info.getValue()} />,
      }),
    ],
    [],
  );

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={adminActivity?.isSuccess && adminActivity?.data}
      isLoading={adminActivity?.isLoading}
      totalPagesCount={10} // TODO: fix This once backend adds limit in query
    />
  );
}
