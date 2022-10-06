import { Account } from "@/api";
import { BaseModal, Button } from "@/shared/components";
import { useDeleteSuperAdmin } from "@/shared/services/super-admin.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export function DeleteSuperAdminModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const deleteSuperAdminMutation = useDeleteSuperAdmin(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Delete super admin"
      modalWidth="max-w-md"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <h1 className="">Are you sure you want to delete this Super Admin?</h1>
      </div>
      <div className="mt-4 flex flex-row-reverse gap-4 bg-gray-50 px-4 py-3">
        <Button
          isLoading={deleteSuperAdminMutation.isLoading}
          variant="secondary"
          width="max"
          onClick={() =>
            deleteSuperAdminMutation.mutate({ id: selectedData?.id })
          }
        >
          Delete
        </Button>
        <Button
          isDisabled={deleteSuperAdminMutation.isLoading}
          variant="outlined"
          width="max"
          onClick={() => onModalClose()}
        >
          Cancel
        </Button>
      </div>
    </BaseModal>
  );
}
