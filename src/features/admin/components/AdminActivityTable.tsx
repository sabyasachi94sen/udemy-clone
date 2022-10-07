import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";

import { useStoreData } from "@/shared/stores/modal.store";
import React, { useMemo, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { us } from "@/shared/stores/modal.store";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import {getLocalStorage} from "@/features/helpers"


import { Account } from "@/api";
import {
  BaseTable,
  IconButton,
  RowNavigate,
  StatusCell,
  CompleteBar
} from "@/shared/components";
import { useAdminActivity } from "@/shared/services/admin.service";
import { formatDate } from "@/shared/utils";

interface AccountManagerTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
  showManagerActivities: () => void;
  studentId: string;
}

export function AdminActivityTable(): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const adminId=getLocalStorage("adminId");
    
  
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
        cell: (info) => (<CompleteBar rowValue={info.getValue()}/>),
      }),
    ],
    [],
  );
  // const { storedData } = useStoreData();

  // useEffect(() => {
  //   console.log(storedData);
  // }, []);

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
