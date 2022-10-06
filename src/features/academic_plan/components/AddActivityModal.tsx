import { BaseModal } from "@/shared/components";
import { useModal } from "@/shared/stores/modal.store";

import { AddActivityForm } from "./AddActivtyForm";

export function AddActivityModal({
  storeActivityData,
  addDataInTable,
  isAddActive,
}) {
  const { isModalOpen, onModalClose } = useModal();

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen}
      title=" Add activity to Academic Enrichment Plan (Student)"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto max-w-6xl p-8 sm:p-4 sm:py-8">
        <AddActivityForm
          activeData={storeActivityData}
          onClick1={addDataInTable}
          onClick2={isAddActive}
        />
      </div>
    </BaseModal>
  );
}
