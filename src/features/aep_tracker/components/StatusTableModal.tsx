import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

import { Account } from "@/api";
import { BaseModal, BaseTable, Checkbox } from "@/shared/components";
import { useAepTrackerStatus } from "@/shared/services/aep-tracker.service";
import { useModal } from "@/shared/stores/modal.store";
import { formatDate } from "@/shared/utils";
import id from "date-fns/esm/locale/id/index.js";

export function StatusTableModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose, selectedData } = useModal();

  const columnHelper = createColumnHelper<Account>();
  const router = useRouter();
  const { page, perPage } = router.query;

  const aepTrackerStatusQuery = useAepTrackerStatus(
    selectedData?.activity_assignment?.student?.id,
  );

  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor(
        (row) => row.activity_assignment?.activity?.activity_name,
        {
          id: "activity_name",
          header: "Activity Name",
          cell: (info) => info.getValue(),
        },
      ),
      columnHelper.accessor(
        (row) => row.activity_assignment?.activity?.activity_type,
        {
          id: "activity_type",
          header: "Activity Type",
          cell: (info) => info.getValue(),
        },
      ),
      columnHelper.accessor(
        (row) => row.activity_assignment?.activity?.subject,
        {
          id: "subject",
          header: "Subject",
          cell: (info) => info.getValue(),
        },
      ),
      columnHelper.accessor((row) => row.action_map?.action, {
        id: "action_map",
        header: "Action Map",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.target_date, {
        id: "target_date",
        header: "Target Date",
        cell: (info) => (info.getValue() ? formatDate(info.getValue()) : null),
      }),

      columnHelper.accessor((row) => row.id, {
        id: "is_complete",
        header: "Complete",
        cell: (info) => (
          <Checkbox
            isChecked={info.row.original.is_completed}
            size="lg"
            label="action_tracker"
          />
        ),
      }),
    ],
    [],
  );

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[82%]"
      title="AEP implementation status table"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <p className="text-bold ml-[2%] mb-5 mt-4">
        Student Name :{" "}
        {selectedData?.activity_assignment?.student?.student_name}{" "}
      </p>

      <BaseTable<Account>
        columns={columns}
        currentPage={Number(page) || 1}
        data={
          aepTrackerStatusQuery?.isFetchedAfterMount &&
          aepTrackerStatusQuery?.isSuccess &&
          aepTrackerStatusQuery?.data?.length != 0
            ? aepTrackerStatusQuery?.data
            : []
        }
        isLoading={aepTrackerStatusQuery?.isLoading}
        // totalPagesCount={10} // TODO: fix This once backend adds limit in query
      />
    </BaseModal>
  );
}
