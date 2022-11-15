import Link from "next/link";
import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import {
  AcademicActivityTable,
  DeleteActivityModal,
  UpdateAepModal,
  ViewActivityModal
} from "@/features/academic_plan";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal ,useStoreData} from "@/shared/stores/modal.store";
import { getLocalStorage } from "@/features/helpers";
import { useEffect, useState } from "react";
import { useAepActivity } from "@/shared/services/aep.service";
import { useRouter } from "next/router";
import { useStore } from "zustand";




export default function AepActivityPage() {
  const { currModalKey, onModalOpen, isModalOpen } =
    useModal() as ModalState<Account>;


  const {setStoredData,storedData}=useStoreData()
  const [studentName, setStudentName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aepActivityList,setAepActivityList]=useState(null)
  const [isSearch,setIsSearch]=useState(false)
  const router = useRouter();
  const { page, perPage } = router.query;
  const aepId=getLocalStorage("studentId");
  const [openAepModal,setAepModal]=useState(false)

  const aepActivityQuery = useAepActivity(aepId);
 

  


   const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=aepActivityQuery?.data?.filter((item)=>item?.activity?.activity_name.includes(staffName))



    
    if(searchResults.length!=0){
      setIsSearch(true)
      setAepActivityList({isLoading: false, isSuccess: true, data:searchResults
     
    })
  }
 }


  useEffect(() => {
    if(getLocalStorage("token")==null)
    router.push("/login")
    
    const student_name = getLocalStorage("studentName");
    setStudentName(student_name);
    setIsLoading(true);
    setStoredData(false)
    
  }, []);


  useEffect(()=>{
    
    if(storedData)
    onModalOpen("updateAepActivity")

  },[isModalOpen])





  return (
    <>
    {isModalOpen?
    <ViewActivityModal 
    isOpen={currModalKey==="viewActivity"} 
    />:null}
    
      <DeleteActivityModal
        isOpen={currModalKey === "deleteAepStudentActivity"}
      />

      {isModalOpen? (
        <UpdateAepModal isOpen={currModalKey === "updateAepActivity"} />
      ) : null}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          Academic Enrichment Plan (student)
        </h1>
        <p className="mt-1 italic">This shows the roster of students assigned to you.</p>
        <p className="mt-1 italic">Click on “View AEP Status Tracker (student) to view and update the AEP status. Click on “Update AEP” to update or change the student’s plan.</p>
        <div className="mt-8 flex justify-between">

          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search for activities in AEP here"
            width="96"
            onChange={searchStaff}
          />
        </div>

        <div className="mt-10 flex h-[7vh] w-[100%] items-center">
          <p className="text-xl font-bold">
            Student name : {studentName}
            <span className="text-xl font-medium" />
          </p>
          <div
            className="ml-2 flex h-[7vh] w-[46%] justify-evenly text-white
             "
          >
            <Link href="/aep-tracker">
              <Button
                className="h-[6vh] rounded-md font-bolder bg-cyan-500 text-white text-[1.12rem] font-extrabold hover:bg-blue-500"
                type="button"
                width="w-[50%]"
                onClick={()=>{

                  setStoredData({
                    activity_assignment:{
                      student:{
                        student_name:studentName
                      }
                    }
                  })

                  aepActivityQuery?.data?.map((item) => {
                    if(item?.student?.student_name===studentName)
                    setStoredData({activity_assignment:{
                      student:{
                        ...item?.student,
                        
                      }
                    }})
                  })
               
                }
                }
              >
                View AEP Status Tracker (student)
              </Button>
            </Link>
            {isLoading ? (
              <Button
                className={`h-[6vh] rounded-md font-bolder bg-cyan-500 text-[1.12rem] font-extrabold text-white hover:bg-blue-500`}
                type="button"
                width="w-[40%]"
                onClick={() => {
                onModalOpen("updateAepActivity")
                setIsSearch(false)
              }}
              >
                Update AEP
              </Button>
            ) : null}
          </div>
        </div>

        <AcademicActivityTable
          onDelete={(user) => onModalOpen("deleteAepStudentActivity", user)}
          onViewActivity={(user)=> onModalOpen("viewActivity",user)}
          aepActivityQuery={!isSearch?aepActivityQuery: aepActivityList}
          page={page}
          isSearch={()=>setIsSearch(false)}
         
        />
      </div>
    </>
  );
}
