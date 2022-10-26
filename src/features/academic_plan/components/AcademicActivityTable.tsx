import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";

import React, { useMemo, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { us } from "@/shared/stores/modal.store";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { getLocalStorage } from "@/features/helpers";
import { useAepActivityComplete } from "@/shared/services/aep.service";

import { Account } from "@/api";
import {
  BaseTable,
  IconButton,
  RowNavigate,
  StatusCell,
  Checkbox,
} from "@/shared/components";

import { formatDate } from "@/shared/utils";


interface AcademicActivityTableProps {
  onDelete: (user: Account) => void;
}

export function AcademicActivityTable({ onDelete,aepActivityQuery,page ,isSearch,onViewActivity }): JSX.Element {

   const aepActivityCompleteQuery=useAepActivityComplete()
   const student_id=getLocalStorage("studentId")
 

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
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row?.activity?.activity_type, {
        id: "activity_type",
        header: <div className="w-[14vw] text-center">Type</div>,
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row?.activity?.subject, {
        id: "subject",
        header: <div className="w-[167%] text-center">Subject &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</div>,
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row?.activity?.application_requirement, {
        id: "application_requirement",
        header: <div className="w-[100%] text-center">Application Requirements</div>,
        cell: (info) => <div className="text-center">{info.getValue()?.join(", ")}</div>,
      }),
      columnHelper.accessor((row) => row?.activity?.application_deadline, {
        id: "application_deadline",
        header: <div className="text-center">Application Deadline</div>,
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),

      columnHelper.accessor((row) => row?.activity?.activity_start_date, {
        id: "activity_start_date",
        header: <div className="text-center">Activity Start Date</div>,
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row.id, {
        id: "details",
        header: "Details",
        cell: (info) => (<img onClick={()=>onViewActivity(info.row.original.activity)} src={"https://thumbs.dreamstime.com/b/info-icon-information-sign-speech-bubble-symbol-i-letter-vector-illustration-125540368.jpg"} className="w-[1.5rem] h-[1.5rem] ml-4 cursor-pointer" />)
        
      
      }),
      columnHelper.accessor((row) => row.is_completed, {
        id: "is_complete",
        header: "Complete",
        cell: (info) => <div className="pl-6"><Checkbox 
        size={"lg"} 
        isChecked={info.getValue()}
        onClick={()=>{
         aepActivityCompleteQuery.mutate({
          student_id:Number(student_id),
          activity_id: info.row.original.activity.id
         })
        }} />
        </div>,
      }),

      columnHelper.accessor((row) => row.id, {
        id: "delete",
        header: "Delete",
        cell: (info) => (
          <div className="pl-4">
          <IconButton
            toolTipText="Delete"
            onClick={() => {
            onDelete(info.row.original)
            isSearch()
            }}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
          </div>
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
      // totalPagesCount={1} // TODO: fix This once backend adds limit in query
    />
  );
}
