import Link from "next/link";
import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AcademicActivityTable,DeleteAepTrackerModal ,UpdateAepModal } from "@/features/academic_plan"
import { Button, Input } from "@/shared/components";
import { ModalState, useModal , useStoreData } from "@/shared/stores/modal.store";
import { GetUserType } from "@/features/helpers";
import { useEffect,useState } from "react";



export default function AepActivityPage() {
  const { currModalKey, onModalOpen,isModalOpen } = useModal() as ModalState<Account>;
  const { storedData }=useStoreData();
  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    setIsLoading(true)
  },[])
 

  return (
    <>
      <DeleteAepTrackerModal isOpen={currModalKey==="deleteAepStudentActivity"} />

      {isModalOpen?
        <UpdateAepModal isOpen={currModalKey==="updateAepActivity"} />: null}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          Academic Enrichment Plan (student)
        </h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
          />
          
        </div>

        <div className="mt-10 flex h-[7vh] w-[100%] items-center">
          <p className="text-xl font-bold">
            Student name : {storedData?.studentName}
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
            {isLoading?
            <Button
              className={`h-[6vh] rounded-md  text-white ${GetUserType()==="super_admin"?`hover:bg-blue-500 bg-cyan-500`: `bg-cyan-500`} `}
            //   disabled={user == "super_admin"}
              type="button"
              width="w-[46%]"
              onClick={()=>onModalOpen("updateAepActivity")}
              // isDisabled={GetUserType()==="super_admin"?true:false}
              
            >
              Update AEP
            </Button>: null}
          </div>
        </div>

        <AcademicActivityTable onDelete={(user)=>onModalOpen("deleteAepStudentActivity",user)} />
      </div>
    </>
  );
}
