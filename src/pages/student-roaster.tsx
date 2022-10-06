import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { CreateStudentModal,DeleteStudentModal,StudentTable,UpdateStudentModal,ViewStudentModal} from "@/features/student";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export default function StudentPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;

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
          />
          <Button width="max" onClick={() => onModalOpen("createStudent")}>
            Add Staff
          </Button>
        </div>
        <StudentTable
          onDelete={(user) => onModalOpen("deleteStudent", user)}
          onUpdate={(user) => onModalOpen("updateStudent", user)}
          onView={(user)=>onModalOpen("viewStudent",user)}
        />
      </div>
    </>
  );
}
