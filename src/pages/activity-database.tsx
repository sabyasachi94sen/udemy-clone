

import { HiSearch } from "react-icons/hi";

import { Account } from "@/api";
import { AEPTable,StatusTableModal  } from "@/features/aep_tracker";
import { Button, Input } from "@/shared/components";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export default function StudentPage() {
  const { currModalKey, onModalOpen } = useModal() as ModalState<Account>;

  return (
    <>
           <h1 className="text-center">Page not found</h1>
    </>
  );
}

