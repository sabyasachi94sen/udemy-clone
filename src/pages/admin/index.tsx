import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import {
  AdminTable,
  CreateAdminModal,
  DeleteAdminModal,
  UpdateAdminModal,
} from "@/features/admin";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export default function AdminPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;

  return (
    <>
      <CreateAdminModal isOpen={currModalKey === "createAdmin"} />
      <UpdateAdminModal isOpen={currModalKey === "updateAdmin"} />
      <DeleteAdminModal isOpen={currModalKey === "deleteAdmin"} /> 
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          Essai Admin Roster
        </h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
          />
          <Button width="max" onClick={() => onModalOpen("createAdmin")}>
            Add Staff
          </Button>
        </div>
        <AdminTable
          onDelete={(user) => onModalOpen("deleteAdmin", user)}
          onUpdate={(user) => onModalOpen("updateAdmin", user)}
        />
      </div>
    </>
  );
}
