import { Account } from "@/api";
import { BaseModal, Button } from "@/shared/components";
import { useDeleteAdmin } from "@/shared/services/admin.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export function DeleteAdminModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const deleteAdminMutation = useDeleteAdmin(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-md"
      title="Delete admin"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <h1 className="">Are you sure you want to delete this Admin?</h1>
      </div>
      <div className="mt-4 flex flex-row-reverse gap-4 bg-gray-50 px-4 py-3">
        <Button
          isLoading={deleteAdminMutation.isLoading}
          variant="secondary"
          width="max"
          onClick={() =>
            deleteAdminMutation.mutate({ id: selectedData?.id })
          }
        >
          Delete
        </Button>
        <Button
          isDisabled={deleteAdminMutation.isLoading}
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
