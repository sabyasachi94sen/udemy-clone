import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AEPTrackerTable,StatusTableModal  } from "@/features/aep_tracker";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export default function StudentPage() {
  const { currModalKey, onModalOpen,isModalOpen } = useModal() as ModalState<Account>;

  return (
    <>
    {isModalOpen?
    <StatusTableModal isOpen={currModalKey === "viewStatusTable"} />: null}
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="font-sans text-3xl font-bold">
        Essai AEP Status Tracker Roster
      </h1>
      <div className="mt-8 flex justify-between">
        <Input
          leftAddOn={<HiSearch />}
          placeholder="Search the staff member here"
          width="96"
          />
        
      </div>
      <AEPTrackerTable onView={(user)=>onModalOpen("viewStatusTable",user)} />
    </div>
    </>
  );
}