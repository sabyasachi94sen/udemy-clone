import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AdminActivityTable } from "@/features/admin";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useStoreData } from "@/shared/stores/modal.store";
import { getLocalStorage } from "@/features/helpers";
import { useRouter } from "next/router";
import { useAdminActivity } from "@/shared/services/admin.service";

export default function AdminPersonalPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;
  const [adminName,setAdminName]=useState(null)
  const [adminStudentList,setAdminStudentList]=useState(null)
  const [isSearch,setIsSearch]=useState(false)
  const router = useRouter();
  const { page, perPage } = router.query;


  const adminId = getLocalStorage("adminInfo");

  const adminActivity = useAdminActivity(adminId);

  

  const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=adminActivity?.data?.filter((item)=>item?.student.includes(staffName))
    console.log(searchResults)


    
    if(searchResults?.length!=0){
      setIsSearch(true)
      setAdminStudentList({isLoading: false, isSuccess: true, data:searchResults
     
    })
  }
 }


  useEffect(()=>{
    if(getLocalStorage("token")==null)
    router.push("/login")

    const admin_name=getLocalStorage("adminName");
    setAdminName(admin_name)

    
  },[])
  

  return (
    <>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
       
        <h1 id="admin_name" className="font-sans text-3xl font-bold">Assigned Student Details</h1>
        <h3 className="italic mt-1">Staff name: {adminName}</h3>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
            onChange={searchStaff}
          />
        </div>

        <AdminActivityTable 
        adminActivity={!isSearch?adminActivity: adminStudentList}
        page={page}
        
        />
      </div>
    </>
  );
}
