import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { ActivityTable ,ActionMapModal,CreateActivityModal,ViewActivityModal,UpdateActivityModal,DeleteActivityModal } from "@/features/activitydb";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useRouter } from "next/router";
import { useActivityList } from "@/shared/services/activity.service";
import { useState,useEffect } from "react";
import { getLocalStorage } from "@/features/helpers";

export default function StudentPage() {
  const { currModalKey, onModalOpen,isModalOpen } = useModal() as ModalState<Account>;
  const router = useRouter();
  const { page, perPage } = router.query;
  const activityListQuery = useActivityList({ page });
  const [isSearch,setIsSearch]=useState(false)
  const [activityList,setActivityList]=useState(null)
 
  

    const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=activityListQuery?.data?.results.filter((item)=>item.activity_name.includes(staffName))

    if(searchResults.length!=0){
      setIsSearch(true)
      setActivityList({isLoading: false, isSuccess:true, data:{
        results: searchResults
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
    <ActionMapModal isOpen={currModalKey === "viewActionMap"} />:null}
    <CreateActivityModal isOpen={currModalKey==="createActivity"} />
    <ViewActivityModal isOpen={currModalKey==="viewActivity"} />
    <UpdateActivityModal isOpen={currModalKey==="updateActivity"} />
    <DeleteActivityModal isOpen={currModalKey==="deleteActivity"} />
   
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="font-sans text-3xl font-bold">
      Essai Activity Database
      </h1>
      <div className="mt-8 flex justify-between">
        <Input
          leftAddOn={<HiSearch />}
          placeholder="Search the staff member here"
          width="96"
          onChange={searchStaff}
          />
          <Button width="max" onClick={() => {onModalOpen("createActivity")
           setIsSearch(false)
        
        }}>
            Add Activity
          </Button>
        
      </div>
      <ActivityTable
       onViewActivity={(user)=>onModalOpen("viewActivity",user)}
       onUpdateActivity={(user)=>onModalOpen("updateActivity",user)}
       onDeleteActivity={(user)=>onModalOpen("deleteActivity",user)}
       onViewActionMap={(user)=>onModalOpen("viewActionMap",user)}
       activityListQuery={!isSearch?activityListQuery:activityList}
       page={page}
       isSearch={()=>setIsSearch(false)}
      
      />
    </div>
    </>
  );
}
