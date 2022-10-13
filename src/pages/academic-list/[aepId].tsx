import Link from "next/link";
import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import {
  AcademicActivityTable,
  DeleteAepTrackerModal,
  UpdateAepModal,
} from "@/features/academic_plan";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { getLocalStorage } from "@/features/helpers";
import { useEffect, useState } from "react";
import { useAepActivity } from "@/shared/services/aep.service";
import { useRouter } from "next/router";


export default function AepActivityPage() {
  const { currModalKey, onModalOpen, isModalOpen } =
    useModal() as ModalState<Account>;
  const [studentName, setStudentName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aepActivityList,setAepActivityList]=useState(null)
  const [isSearch,setIsSearch]=useState(false)
  const router = useRouter();
  const { page, perPage } = router.query;
  const aepId=getLocalStorage("studentId");

  const aepActivityQuery = useAepActivity(aepId);

  


   const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
    const searchResults=aepActivityQuery?.data?.filter((item)=>item?.activity?.activity_name.includes(staffName))
    console.log(searchResults)


    
    if(searchResults.length!=0){
      setIsSearch(true)
      setAepActivityList({isLoading: false, isSuccess: true, data:searchResults
     
    })
  }
 }


  useEffect(() => {
    const student_name = getLocalStorage("studentName");
    setStudentName(student_name);
    setIsLoading(true);
  }, []);

  return (
    <>
      <DeleteAepTrackerModal
        isOpen={currModalKey === "deleteAepStudentActivity"}
      />

      {isModalOpen ? (
        <UpdateAepModal isOpen={currModalKey === "updateAepActivity"} />
      ) : null}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          Academic Enrichment Plan (student)
        </h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
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
            className="ml-2 flex h-[7vh] w-[60%] justify-around text-white
             "
          >
            <Link href="/aep-tracker">
              <Button
                className="h-[6vh] rounded-md bg-cyan-500 text-white hover:bg-blue-500"
                type="button"
                width="w-[46%]"
              >
                View AEP Status Tracker (student)
              </Button>
            </Link>
            {isLoading ? (
              <Button
                className={`h-[6vh] rounded-md  bg-cyan-500 text-white hover:bg-blue-500`}
                type="button"
                width="w-[46%]"
                onClick={() => {onModalOpen("updateAepActivity")
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
          aepActivityQuery={!isSearch?aepActivityQuery: aepActivityList}
          page={page}
          isSearch={()=>setIsSearch(false)}
         
        />
      </div>
    </>
  );
}
