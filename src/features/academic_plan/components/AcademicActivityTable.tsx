import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";

import React, { useMemo, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { us } from "@/shared/stores/modal.store";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { getLocalStorage } from "@/features/helpers";

import { Account } from "@/api";
import {
  BaseTable,
  IconButton,
  RowNavigate,
  StatusCell,
  Checkbox,
} from "@/shared/components";
import { useAepActivity } from "@/shared/services/aep.service";
import { formatDate } from "@/shared/utils";

interface AcademicActivityTableProps {
  onDelete: (user: Account) => void;
}

export function AcademicActivityTable({ onDelete }): JSX.Element {
  const router = useRouter();
  const { page, perPage } = router.query;
  const aepId=getLocalStorage("studentId");

  const aepActivityQuery = useAepActivity(aepId);

  const { isModalOpen, onModalClose } = useModal() as ModalState<Account>;

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row?.activity?.activity_name, {
        id: "activity_name",
        header: "Activity Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.activity?.activity_type, {
        id: "activity_type",
        header: "Type",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.activity?.subject, {
        id: "subject",
        header: "Subject",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.activity?.application_requirement, {
        id: "application_requirement",
        header: "Application of Requirement",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.activity?.application_deadline, {
        id: "application_deadline",
        header: "Application Deadline",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor((row) => row?.activity?.activity_start_date, {
        id: "activity_start_date",
        header: "Activity Start Date",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.id, {
        id: "is_complete",
        header: "Complete",
        cell: (info) => <Checkbox size={"lg"} />,
      }),

      columnHelper.accessor((row) => row.id, {
        id: "delete",
        header: "Delete",
        cell: (info) => (
          <IconButton
            toolTipText="Delete"
            onClick={() => onDelete(info.row.original)}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
        ),
      }),
    ],
    [],
  );

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={aepActivityQuery?.isSuccess && aepActivityQuery?.data}
      isLoading={aepActivityQuery?.isLoading}
      totalPagesCount={1} // TODO: fix This once backend adds limit in query
    />
  );
}
