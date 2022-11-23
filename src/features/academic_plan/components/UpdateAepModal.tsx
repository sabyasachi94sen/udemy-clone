import { useRouter } from "next/router";
import { Account } from "@/api";
import { BaseModal,BaseTable,Button,Form,Input, RowNavigate} from "@/shared/components";
import { useAepActivityAssignment, useAepActivityAssignmentFilter, useAepActivityFilter,useAepChoice } from "@/shared/services/aep.service";
import { useModal,useStoreData } from "@/shared/stores/modal.store";
import {useEffect, useMemo, useState} from "react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { queryKeys } from "@/shared/services";
import { ViewButton } from "@/shared/components";
import { ViewActivityModal } from "./ViewActivityModal";
import ReactTooltip from 'react-tooltip';
import { RemarkModal } from "./RemarkModal";




export function UpdateAepModal({ isOpen }: { isOpen: boolean }) {

    


  const router=useRouter()
  const { isModalOpen, onModalClose ,currModalKey,onModalOpen} = useModal();
  const { page, perPage,aepId } = router.query;
  const aepActivityFilter=useAepActivityFilter(aepId)
  const aepActivityAssignment=useAepActivityAssignment()
  const aepActivityAssignmentFilter=useAepActivityAssignmentFilter()
  const columnHelper = createColumnHelper<Account>();
  const {setStoredData}=useStoreData()

 const aepChoice=useAepChoice()

  

  

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
        header: <div className="pl-3">Application Requirements</div>,
        cell: (info) =><div className="text-center">{info.getValue()?.join(", ")}</div>,
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
          <>
            <img src="/images/remark-icon.png" alt="remark-icon" className="w-[80%] cursor-pointer pl-5"
            
             onMouseEnter={()=>{
              onModalOpen("viewRemark",{remarks:info?.row?.original?.remarks,activity_name:info?.row?.original?.activity_name})
              setStoredData(true)
            
             }
             }
            
            />
       
         
        </>
        ),
      }),
      columnHelper.accessor((row) => row?.id, {
        id: "details",
        header: "Details",
        cell: (info) => (
        <img onClick={()=>{
          onModalOpen("viewActivityDetails",info.row.original)
          setStoredData(true)
        }
        
        } src={"https://thumbs.dreamstime.com/b/info-icon-information-sign-speech-bubble-symbol-i-letter-vector-illustration-125540368.jpg"} className="w-[1.5rem] h-[1.5rem] ml-4 cursor-pointer" />
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
    {isModalOpen?
    <ViewActivityModal isOpen={currModalKey==="viewActivityDetails"} />:null}
    
      
      {isModalOpen?
     <RemarkModal isOpen={currModalKey==="viewRemark"} />:null}

    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[80%]"
      title="Add activity to Academic Enrichment Plan (Student)"
      onRequestClose={() => {
        onModalClose();
        setStoredData(false)
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
                  <option>All</option>
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
                  <option>All</option>
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
