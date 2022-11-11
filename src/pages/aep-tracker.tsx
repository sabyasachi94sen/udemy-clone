import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AEPTrackerTable,StatusTableModal  } from "@/features/aep_tracker";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useAepTracker } from "@/shared/services/aep-tracker.service";
import { useStoreData } from "@/shared/stores/modal.store";
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
  
    const before_target_date=AepTrackerQuery?.data?.before_target_date.filter((item)=>item?.activity_assignment?.student?.student_name.includes(staffName))
    const todays_target_date=AepTrackerQuery?.data?.todays_target_date.filter((item)=>item?.activity_assignment?.student?.student_name.includes(staffName))
    const after_target_date=AepTrackerQuery?.data?.after_target_date.filter((item)=>item?.activity_assignment?.student?.student_name.includes(staffName))
    const completed=AepTrackerQuery?.data?.completed.filter((item)=>item?.activity_assignment?.student?.student_name.includes(staffName))
    
   

    if(before_target_date.length!=0 || todays_target_date.length!=0 || after_target_date.length!=0 || completed.length!=0){
      setIsSearch(true)
      setAepTrackerList({isLoading: false, isSuccess:true, data:{
        before_target_date:before_target_date,
        todays_target_date: todays_target_date,
        after_target_date : after_target_date,
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
        Action Tracker
      </h1>
      <p className="mt-1 italic">Update student progress here</p>
      <div className="mt-8 flex justify-between">
        <Input
          leftAddOn={<HiSearch />}
          placeholder="Search for a student here"
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