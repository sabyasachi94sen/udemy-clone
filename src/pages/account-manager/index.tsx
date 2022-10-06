import { useState } from "react"
import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AccountManagerActivityTable,AccountManagerTable,CreateAccountManagerModal,DeleteAccountManagerModal,UpdateAccountManagerModal } from "@/features/account_manger"
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export default function AccountManagerPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;

  
 

  return (
    <>
      <CreateAccountManagerModal isOpen={currModalKey === "createAccountManager"} />
      <UpdateAccountManagerModal isOpen={currModalKey === "updateAccountManager"} />
      <DeleteAccountManagerModal isOpen={currModalKey === "deleteAccountManager"} />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="font-sans text-3xl font-bold">
          Essai Account Manager Roster
        </h1>
        <div className="mt-8 flex justify-between">
          <Input
            leftAddOn={<HiSearch />}
            placeholder="Search the staff member here"
            width="96"
          />
          <Button width="max" onClick={() => onModalOpen("createAccountManager")}>
            Add Staff
          </Button>
        </div>
        
          <AccountManagerTable
           
            onDelete={(user) => onModalOpen("deleteAccountManager", user)}
            onUpdate={(user) => onModalOpen("updateAccountManager", user)}
            
        />
      </div>
    </>
  );
}
