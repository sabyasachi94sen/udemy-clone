import { HiSearch } from "react-icons/hi";
import { useState,useEffect, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import { useSuperAdmins } from "@/shared/services/super-admin.service";

import { Account } from "@/api";
import {
  CreateSuperAdminModal,
  DeleteSuperAdminModal,
  SuperAdminTable,
  UpdateSuperAdminModal,
} from "@/features/admin";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { getLocalStorage } from "@/features/helpers";

export default function SuperAdminPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;
  const [searchData,setSearchData]=useState([])

  const router = useRouter();
  const { page, perPage } = router.query;
  const superAdminsQuery = useSuperAdmins({ page });
  console.log(superAdminsQuery)
  const [superAdminList,setSuperAdminList]=useState(null)
  const [isSearch,setIsSearch]=useState(false)
  

    
   
  

  const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=superAdminsQuery?.data?.filter((item)=>item.username.includes(staffName))
    
    if(searchResults.length!=0){
      setIsSearch(true)
      setSuperAdminList({isLoading: false, data:searchResults
    })
  }
 }

 useEffect(()=>{
     if(getLocalStorage("token")==null)
     router.push("/login")
 },[])


 

  return (
    <>
      <CreateSuperAdminModal isOpen={currModalKey === "createSuperAdmin"} />
      <UpdateSuperAdminModal isOpen={currModalKey === "updateSuperAdmin"} />
      <DeleteSuperAdminModal isOpen={currModalKey === "deleteSuperAdmin"} />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          Essai Super Admin Roster
        </h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
            onChange={searchStaff}
            name="staff_name"
          />
          <Button width="max" onClick={() => {onModalOpen("createSuperAdmin")
          setIsSearch(false)
        }}>
            Add Staff
          </Button>
        </div>
        <SuperAdminTable
          onDelete={(user) => onModalOpen("deleteSuperAdmin", user)}
          onUpdate={(user) => onModalOpen("updateSuperAdmin", user)}
          superAdminsQuery={!isSearch?superAdminsQuery: superAdminList}
          page={page}
          isSearch={()=> setIsSearch(false)}
        />
      </div>
    </>
  );
}