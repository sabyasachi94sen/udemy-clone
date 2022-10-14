import { useEffect, useState } from "react"
import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AccountManagerActivityTable } from "@/features/account_manger"
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { getLocalStorage } from "@/features/helpers";
import { useRouter } from "next/router";
import { useAccountManagerActivities } from "@/shared/services/account-manager.service";



export default function AccountManagerPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;

   const [managerName,setManagerName]=useState(null)
   const [managerActivityList,setManagerActivityList]=useState(null)
   const [isSearch,setIsSearch]=useState(false)
   const router = useRouter();
   const { page, perPage } = router.query;
   const studentId=getLocalStorage("studentId");
   const accountManagerActivity=useAccountManagerActivities(studentId)



    const searchStaff=(e:SyntheticEvent)=>{
     const staffName=e.target.value;
     const searchResults=accountManagerActivity?.data?.filter((item)=>item?.student.includes(staffName))
     
 
 
     
     if(searchResults.length!=0){
       setIsSearch(true)
       setManagerActivityList({isLoading: false, isSuccess: true, data:searchResults
      
     })
   }
  }
  
 

   
   



useEffect(()=>{
    const manager_name=getLocalStorage("managerName")
      setManagerName(manager_name)
   },[])

  return (
    <>
     
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          {managerName} Details
        </h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
            onChange={searchStaff}
           
          />
          
        </div>
        
          <AccountManagerActivityTable 
           accountManagerActivity={!isSearch?accountManagerActivity: managerActivityList}
           page={page}
          />
      </div>
    </>
  );
}
