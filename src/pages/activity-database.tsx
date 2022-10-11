import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { ActivityTable ,ActionMapModal,CreateActivityModal,ViewActivityModal,UpdateActivityModal,DeleteActivityModal } from "@/features/activitydb";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export default function StudentPage() {
  const { currModalKey, onModalOpen,isModalOpen } = useModal() as ModalState<Account>;

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
          />
          <Button width="max" onClick={() => onModalOpen("createActivity")}>
            Add Activity
          </Button>
        
      </div>
      <ActivityTable
       onViewActivity={(user)=>onModalOpen("viewActivity",user)}
       onUpdateActivity={(user)=>onModalOpen("updateActivity",user)}
       onDeleteActivity={(user)=>onModalOpen("deleteActivity",user)}
       onViewActionMap={(user)=>onModalOpen("viewActionMap",user)}
      
      />
    </div>
    </>
  );
}
