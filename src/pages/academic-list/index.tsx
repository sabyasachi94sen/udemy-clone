import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AcademicTable } from "@/features/academic_plan";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAepList } from "@/shared/services/aep.service";
import { getLocalStorage } from "@/features/helpers";


export default function AcademicPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;
  const [aepList,setAepList]=useState(null)
  const [isSearch,setIsSearch]=useState(false)

  const router = useRouter();
  const { page, perPage } = router.query;

  const AepListQuery = useAepList({ page });



  

    const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=AepListQuery?.data?.filter((item)=>item?.student?.student_name.includes(staffName))

   

    
    if(searchResults.length!=0){
      setIsSearch(true)
      setAepList({isLoading: false, data:searchResults
     
    })
  }
 }

 useEffect(()=>{
    if(getLocalStorage("token")==null)
    router.push("/login")
 },[])

  return (
    <>

    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="font-sans text-3xl font-bold">
      Academic Enrichment Plan Summary
     
      </h1>
      <p className="font-bold mt-1 italic">Click on a student’s name to view/edit their AEP</p>
      <div className="mt-8 flex justify-between">
        <Input
          leftAddOn={<HiSearch />}
          placeholder="Search for students here"
          width="96"
          onChange={searchStaff}
          />
        
      </div>
      <AcademicTable onView={(user)=>onModalOpen("viewStatusTable",user)} 
        AepListQuery={!isSearch?AepListQuery: aepList}
        page={page}
      
      />
    </div>
    </>
  );
}
