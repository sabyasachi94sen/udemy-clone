mport { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import {
  CreateSuperAdminModal,
  DeleteSuperAdminModal,
  SuperAdminTable,
  UpdateSuperAdminModal,
} from "@/features/admin";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export default function SuperAdminPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;

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
          />
          <Button width="max" onClick={() => onModalOpen("createSuperAdmin")}>
            Add Staff
          </Button>
        </div>
        <SuperAdminTable
          onDelete={(user) => onModalOpen("deleteSuperAdmin", user)}
          onUpdate={(user) => onModalOpen("updateSuperAdmin", user)}
        />
      </div>
    </>
  );
}