import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";

import { Account } from "@/api";
import {
  BaseTable,
  Checkbox,
  RowNavigate,
} from "@/shared/components";
import { useAepComplete } from "@/shared/services/aep-tracker.service";
import { useModal , useStoreData } from "@/shared/stores/modal.store";
import { formatDate } from "@/shared/utils";

export function AEPTrackerTable({
  onView,
  AepTrackerQuery,
  page,
  isSearch,
}): JSX.Element {
  // const updateCompleteMutation = useUpdateComplete();
  const date = new Date();
  const columnHelper = createColumnHelper<Account>();
  const [storeAepData, setStoreAepData] = useState([]);
  const aepComplete = useAepComplete();
  const { storedData, setStoredData } = useStoreData();
  const { onModalOpen } = useModal();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.action_map?.action, {
        id: "action_area",
        header: <div className="">Action Area</div>,
        cell: (info) => <div className="">AEP</div>,
      }),
      columnHelper.accessor(
        (row) => row.activity_assignment?.student?.student_name,
        {
          id: "student_name",
          header: "Student Name",
          cell: (info) => (
            <RowNavigate
              rowLink={() => onView(info.row.original)}
              rowValue={info.getValue()}
            />
          ),
        },
      ),
      columnHelper.accessor(
        (row) => row.activity_assignment?.activity?.activity_name,
        {
          id: "activity_name",
          header: "Activity Name",
          cell: (info) => <div className="">{info.getValue()}</div>,
        },
      ),
      // columnHelper.accessor((row) => row.activity_assignment?.activity?.activity_type, {
      //   id: "activity_type",
      //   header: <div className="w-[14vw] text-center">Activity Type</div>,
      //   cell: (info) => <div className="text-center">{info.getValue()}</div>,
      // }),
      // columnHelper.accessor((row) =>row.activity_assignment?.activity?.subject, {
      //   id: "subject",
      //   header: <div className="text-center w-[14vw]">Subject</div>,
      //   cell: (info) =>
      //   <div className="text-center">{info.getValue()}</div>
      //   ,
      // }),
      columnHelper.accessor((row) => row.action_map?.action, {
        id: "task",
        header: <div className="">Task</div>,
        cell: (info) => <div className="">{info.getValue()}</div>,
      }),
      columnHelper.accessor(
        (row) => row.activity_assignment?.assigned_by?.username,
        {
          id: "manager",
          header: <div className="">Assigned staff</div>,
          cell: (info) => <div className="">{info.getValue()}</div>,
        },
      ),
      columnHelper.accessor((row) => row.target_date, {
        id: "target_date",
        header: "Target Date",
        cell: (info) => (
          <div className="">
            {info.getValue() ? formatDate(info.getValue()) : null}
          </div>
        ),
      }),

      columnHelper.accessor(
        (row) => row.activity_assignment?.activity?.is_active,
        {
          id: "is_active",
          header: "Active",
          cell: (info) => (
            <>
              {!info.row.original.is_completed ? (
                <div
                  className={`ml-4 h-[10px] w-[10px] ${
                    new Date(info.row.original.target_date).getTime() <=
                    date.getTime()
                      ? `bg-red-500`
                      : `bg-gray-500`
                  } rounded-lg`}
                 />
              ) : (
                <div
                  className="ml-4 h-[10px] w-[10px] rounded-lg bg-green-500"
                 />
              )}
            </>
          ),
        },
      ),

      columnHelper.accessor((row) => row.is_completed, {
        id: "is_complete",
        header: "Complete",
        cell: (info) => (
          <div className="pl-6">
            <Checkbox
              isChecked={info.getValue()}
              size="lg"
              onClick={() =>
                aepComplete.mutate({
                  plan_id: info.row.original.id,
                  is_completed: true,
                  remarks: "",
                })
              }
            />
          </div>
        ),
      }),
    ],
    [],
  );

  useEffect(() => {
    if (AepTrackerQuery.isSuccess) {
      const tempArr = AepTrackerQuery?.data?.before_target_date.concat(
        AepTrackerQuery?.data?.todays_target_date,
        AepTrackerQuery?.data?.after_target_date,
        AepTrackerQuery?.data?.completed,
      );

      setStoreAepData(tempArr);
    }
  }, [AepTrackerQuery]);

  useEffect(() => {
    if (storedData != null) {
  
        onModalOpen("viewStatusTable", storedData);
        setStoredData(null);
      
    }
  });

  return (
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={storeAepData}
      isLoading={AepTrackerQuery?.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
    />
  );
}
