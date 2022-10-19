import { Account } from "@/api";
import { BaseModal, Button } from "@/shared/components";
import { useDeleteAccountManager } from "@/shared/services/account-manager.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export function DeleteAccountManagerModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const deleteAccountManagerMutation = useDeleteAccountManager(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Delete Account"
      modalWidth="max-w-md"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <h1 className="">Are you sure you want to delete this Account?</h1>
      </div>
      <div className="mt-4 flex flex-row-reverse gap-4 bg-gray-50 px-4 py-3">
        <Button
          isLoading={deleteAccountManagerMutation.isLoading}
          variant="secondary"
          width="max"
          onClick={() =>
            deleteAccountManagerMutation.mutate({ id: selectedData?.id ,student_count:selectedData?.student_count})
          }
        >
          Delete
        </Button>
        <Button
          isDisabled={deleteAccountManagerMutation.isLoading}
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
