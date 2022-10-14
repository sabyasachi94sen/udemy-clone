import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { CreateStudentModal,DeleteStudentModal,StudentTable,UpdateStudentModal,ViewStudentModal} from "@/features/student";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useStudent } from "@/shared/services/student.sevices";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLocalStorage } from "@/features/helpers";

export default function StudentPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;
  

  const router = useRouter();
  const { page, perPage } = router.query;
  const studentQuery = useStudent({ page });
  const [isSearch,setIsSearch]=useState(false)
  const [studentList,setStudentList]=useState(null)
 
  

    const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=studentQuery?.data?.filter((item)=>item.student_name.includes(staffName))

    if(searchResults.length!=0){
      setIsSearch(true)
      setStudentList({isLoading: false, data:searchResults
     
    })
  }
 }


 useEffect(()=>{
   if(getLocalStorage("token")==null)
   router.push("/login")
 },[])



  return (
    <>
      <CreateStudentModal isOpen={currModalKey === "createStudent"} />
      <UpdateStudentModal isOpen={currModalKey === "updateStudent"} />
      <DeleteStudentModal isOpen={currModalKey === "deleteStudent"} />
      <ViewStudentModal isOpen={currModalKey=== "viewStudent"} />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          Essai Student Roster
        </h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
            onChange={searchStaff}
          />
          <Button width="max" onClick={() => {onModalOpen("createStudent")
          setIsSearch(false)
        
        }}>
            Add Student
          </Button>
        </div>
        <StudentTable
          onDelete={(user) => onModalOpen("deleteStudent", user)}
          onUpdate={(user) => onModalOpen("updateStudent", user)}
          onView={(user)=>onModalOpen("viewStudent",user)}
          studentQuery={!isSearch?studentQuery:studentList}
          page={page}
          isSearch={()=>setIsSearch(false)}
        />
      </div>
    </>
  );
}