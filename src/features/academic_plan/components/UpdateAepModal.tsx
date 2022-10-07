import { useRouter } from "next/router";
import { Account } from "@/api";
import { BaseModal,BaseTable,Button,Form,Input} from "@/shared/components";
import { useAepActivityAssignment, useAepActivityAssignmentFilter, useAepActivityFilter } from "@/shared/services/aep.service";
import { useModal } from "@/shared/stores/modal.store";
import {useEffect, useMemo, useState} from "react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "@/shared/services";



export function UpdateAepModal({ isOpen }: { isOpen: boolean }) {

    
  const activeOptions = [
    {
      option: "Active",
      value: "active",
    },
    {
      option: "Inactive",
      value: "inactive",
    },
  ];

  const data = [];
  const router=useRouter()
  const { isModalOpen, onModalClose ,selectedData} = useModal();
  const { page, perPage,aepId } = router.query;


  const [renderPage,setRenderPage]=useState(0)
   

  

//   const createStudentMutaton = useCreateStudent(() => {
//     onModalClose();
//   });

  const aepActivityFilter=useAepActivityFilter(aepId)
  const aepActivityAssignment=useAepActivityAssignment()
  const aepActivityAssignmentFilter=useAepActivityAssignmentFilter()
  
  
  const { refreshQuery } = useRefreshQuery();


  const columnHelper = createColumnHelper<Account>();

  

  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row?.activity_name, {
        id: "activity_name",
        header: "Activity Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.activity_type, {
        id: "activity_type",
        header: "Type",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.subject, {
        id: "subject",
        header: "Subject",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.application_requirement, {
        id: "application_requirement",
        header: "Application of Requirement",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.application_deadline, {
        id: "application_deadline",
        header: "Application Deadline",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor((row) => row?.activity_start_date, {
        id: "activity_start_date",
        header: "Activity Start Date",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.remarks, {
        id: "remarks",
        header: "Remarks",
        cell: (info) => (
        <Input className="bg-cyan-500 rounded-lg w-[60%] h-[6vh]" defaultValue={info.getValue()}  />
        ),
      }),


      columnHelper.accessor((row) => row?.id, {
        id: "add",
        header: "Add to Aep",
        cell: (info) => (
         <Button width="w-[100%]" className="h-[6vh] bg-cyan-500 rounded-lg" onClick={()=>aepActivityAssignment.mutate({activity_id:info.row.original?.id,student_id:Number(aepId)})}>Add</Button>
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
      modalWidth="max-w-[80%]"
      title="Add activity to Academic Enrichment Plan (Student)"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <Form<Account>
        
        onSubmit={(formData) =>aepActivityAssignmentFilter.mutate({status:formData.activity_status,subject:formData.activity_subject,student_id:aepId})}
        >
        {({ register }) => (
            <div>
          <div className="h-auto w-full bg-white pb-10">
        

            <div className="mt-8 flex h-[8vh] w-full justify-between">
              <div className="w-[70%] pl-5">
                <span className="text-md font-bold">Active Status</span>
                <select
                  {...register("activity_status")}
                  className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
          >
                  <option>Select Type</option>
                  <option>Exam</option>
                </select>
              </div>

              <div className="w-[70%]">
                <span className="text-md font-bold">Activity Subject</span>
                <select
                  {...register("activity_subject")}
                  className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
          >
                  <option>Select Subject</option>
                  <option>Maths</option>
                  <option>Olympiad</option>
                </select>
              </div>
            </div>
        
          </div>
          <div className="mx-auto  flex justify-center">
                <Button
                  isLoading={false}
                  type="submit"
                  width="w-[15%]"
                >
                  Submit
                </Button>
              </div>
          </div>
       
      )}
      </Form>
      


      <BaseTable<Account>
        columns={columns}
        currentPage={Number(page) || 1}
        data={aepActivityFilter?.isSuccess && !aepActivityAssignmentFilter?.isSuccess?aepActivityFilter?.data : aepActivityAssignmentFilter?.data}
        isLoading={aepActivityFilter?.isLoading}
        totalPagesCount={10} // TODO: fix This once backend adds limit in query
    
    />
    </BaseModal>
  );
}
