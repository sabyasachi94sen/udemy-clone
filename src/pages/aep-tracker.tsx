import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AEPTrackerTable,StatusTableModal  } from "@/features/aep_tracker";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useAepTracker } from "@/shared/services/aep-tracker.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLocalStorage } from "@/features/helpers";

export default function StudentPage() {
  const { currModalKey, onModalOpen,isModalOpen } = useModal() as ModalState<Account>;

  const router = useRouter();
  const { page, perPage } = router.query;
  const AepTrackerQuery = useAepTracker({ page });

  const [isSearch,setIsSearch]=useState(false)
  const [aepTrackerList,setAepTrackerList]=useState(null)
 
  

    const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
  
    const todays_target_date=AepTrackerQuery?.data?.todays_target_date.filter((item)=>item?.activity_assignment?.student?.student_name.includes(staffName))
    const not_completed=AepTrackerQuery?.data?.yet_to_be_completed.filter((item)=>item?.activity_assignment?.student?.student_name.includes(staffName))
    const completed=AepTrackerQuery?.data?.completed.filter((item)=>item?.activity_assignment?.student?.student_name.includes(staffName))
    
   

    if(not_completed.length!=0 || completed.length!=0){
      setIsSearch(true)
      setAepTrackerList({isLoading: false, isSuccess:true, data:{
        todays_target_date: todays_target_date,
        yet_to_be_completed : not_completed,
        completed: completed,
      }
        
      
     
    })
  }
 }


 useEffect(()=>{

  if(getLocalStorage("token")==null)
   router.push("/login")
 },[])



  return (
    <>
    {isModalOpen?
    <StatusTableModal isOpen={currModalKey === "viewStatusTable"} />: null}
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="font-sans text-3xl font-bold">
        AEP Status Tracker Roster
      </h1>
      <div className="mt-8 flex justify-between">
        <Input
          leftAddOn={<HiSearch />}
          placeholder="Search for a staff member here"
          width="96"
          onChange={searchStaff}
          />
        
      </div>
      <AEPTrackerTable onView={(user)=>onModalOpen("viewStatusTable",user)}
       AepTrackerQuery={!isSearch?AepTrackerQuery:aepTrackerList}
       page={page}
       isSearch={()=>setIsSearch(false)}
       />
    </div>
    </>
  );
}