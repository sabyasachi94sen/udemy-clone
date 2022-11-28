import { HiSearch } from "react-icons/hi";
import { useRouter } from "next/router";
import { Account } from "@/api";
import {
  AdminTable,
  CreateAdminModal,
  DeleteAdminModal,
  UpdateAdminModal,
} from "@/features/admin";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useAdmins } from "@/shared/services/admin.service";
import { useEffect, useState } from "react";
import { getLocalStorage } from "@/features/helpers";

export default function AdminPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;

  const [AdminList,setAdminList]=useState(null)
  const [isSearch,setIsSearch]=useState(false)
  
  const router = useRouter();
  const { page, perPage } = router.query;
  const AdminsQuery = useAdmins({ page });
  
    
   
  

  const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=AdminsQuery?.data?.filter((item)=>item.username.includes(staffName))
    
    if(searchResults?.length!==0){
      setIsSearch(true)
      setAdminList({isLoading: false, data:searchResults
      
    })
  }
 }

 useEffect(()=>{
   if(getLocalStorage("token")==null)
   router.push("/login")

 },[])

  return (
    <>
      <CreateAdminModal isOpen={currModalKey === "createAdmin"} />
      <UpdateAdminModal isOpen={currModalKey === "updateAdmin"} />
      <DeleteAdminModal isOpen={currModalKey === "deleteAdmin"} /> 
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
        Admin Roster
        </h1>
        <p className="text-small mt-1 italic">Click on name to view assigned students</p>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search for a staff member here"
            width="96"
            onChange={searchStaff}
          />
          <Button width="max" onClick={() => {onModalOpen("createAdmin")
          setIsSearch(false)
        }}>
            Add Staff
          </Button>
        </div>
        <AdminTable
          onDelete={(user) => onModalOpen("deleteAdmin", user)}
          onUpdate={(user) => onModalOpen("updateAdmin", user)}
          AdminsQuery={!isSearch?AdminsQuery: AdminList}
          page={page}
          isSearch={()=>setIsSearch(false)}
        />
      </div>
    </>
  );
}
