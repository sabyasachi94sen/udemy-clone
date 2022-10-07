import { Account } from "@/api";
import { BaseModal, Button } from "@/shared/components";
import { useDeleteActivity } from "@/shared/services/activity.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export function DeleteActivityModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const deleteActivityMutation = useDeleteActivity(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-md"
      title="Delete Activity"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <h1 className="">Are you sure you want to delete this Activity?</h1>
      </div>
      <div className="mt-4 flex flex-row-reverse gap-4 bg-gray-50 px-4 py-3">
        <Button
          isLoading={deleteActivityMutation.isLoading}
          variant="secondary"
          width="max"
          onClick={() =>
            deleteActivityMutation.mutate({ id: selectedData?.id })
          }
        >
          Delete
        </Button>
        <Button
          isDisabled={deleteActivityMutation.isLoading}
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
