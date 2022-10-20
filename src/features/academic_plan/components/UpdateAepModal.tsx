import { useRouter } from "next/router";
import { Account } from "@/api";
import { BaseModal,BaseTable,Button,Form,Input} from "@/shared/components";
import { useAepActivityAssignment, useAepActivityAssignmentFilter, useAepActivityFilter,useAepChoice } from "@/shared/services/aep.service";
import { useModal } from "@/shared/stores/modal.store";
import {useEffect, useMemo, useState} from "react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { queryKeys } from "@/shared/services";
import { ViewButton } from "@/shared/components";
import { ViewActivityModal } from "./ViewActivityModal";




export function UpdateAepModal({ isOpen }: { isOpen: boolean }) {

    


  const router=useRouter()
  const { isModalOpen, onModalClose ,currModalKey,onModalOpen} = useModal();
  const { page, perPage,aepId } = router.query;
  const aepActivityFilter=useAepActivityFilter(aepId)
  const aepActivityAssignment=useAepActivityAssignment()
  const aepActivityAssignmentFilter=useAepActivityAssignmentFilter()
  const columnHelper = createColumnHelper<Account>();

 const aepChoice=useAepChoice()

console.log(aepChoice)

  

  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row?.activity_name, {
        id: "activity_name",
        header: "Activity Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row?.activity_type, {
        id: "activity_type",
        header: <div className="w-[14vw] text-center">Type</div>,
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row?.subject, {
        id: "subject",
        header: <div className="w-[11vw] text-center">Subject</div>,
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row?.application_requirement, {
        id: "application_requirement",
        header: "Application of Requirements",
        cell: (info) =><div className="text-center">{info.getValue()}</div>,
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
        <Input className="bg-cyan-500 rounded-lg w-[100%] h-[6vh]" defaultValue={info.getValue()}  />
        ),
      }),
      columnHelper.accessor((row) => row?.id, {
        id: "details",
        header: "Details",
        cell: (info) => (
        <img onClick={()=>onModalOpen("viewActivityDetails",info.row.original)} src={"https://thumbs.dreamstime.com/b/info-icon-information-sign-speech-bubble-symbol-i-letter-vector-illustration-125540368.jpg"} className="w-[1.5rem] h-[1.5rem] ml-4 cursor-pointer" />
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
    <>
    <ViewActivityModal isOpen={currModalKey==="viewActivityDetails"} />
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
       <div className="h-[80vh]">
      <Form<Account>
        
        onSubmit={(formData) =>aepActivityAssignmentFilter.mutate({status:formData.activity_status,subject:formData.activity_subject,student_id:aepId})}
        >
        {({ register }) => (
         
            <div>
              <div className="h-auto w-full pb-10">
        

            <div className="mt-8 flex h-[8vh] w-full justify-between">
              <div className="w-[70%] pl-5">
                <span className="text-md font-bold">Activity Type</span>
                <select
                  {...register("activity_status")}
                  className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
          >
                  <option>Select Type</option>
                  {aepChoice?.data?.activity_type?.map((item,index)=>{
                    return <option key={index}>{item}</option>
                  })}
                </select>
              </div>

              <div className="w-[70%]">
                <span className="text-md font-bold">Activity Subject</span>
                <select
                  {...register("activity_subject")}
                  className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
          >
                  <option>Select Subject</option>
                  {aepChoice?.data?.activity_subject?.map((item,index)=>{
                    return <option key={index}>{item}</option>
                  })}
                </select>
              </div>
            </div>
        
          </div>
          <div className="mx-auto flex justify-center">
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
      <div className="h-[57vh] overflow-y-scroll overflow-x-hidden mt-10">
      <BaseTable<Account>
        columns={columns}
        currentPage={Number(page) || 1}
        data={aepActivityFilter?.isSuccess && !aepActivityAssignmentFilter?.isSuccess?aepActivityFilter?.data : aepActivityAssignmentFilter?.data}
        isLoading={aepActivityFilter?.isLoading}
        // totalPagesCount={10} // TODO: fix This once backend adds limit in query
       
    />
    </div>
    </div>
      


     
    </BaseModal>
    
    </>
  );
}
