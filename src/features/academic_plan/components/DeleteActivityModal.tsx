import { Account } from "@/api";
import { BaseModal, Button } from "@/shared/components";
import { useDeleteAepActivity } from "@/shared/services/aep.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export function DeleteAepTrackerModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const deleteAepActivityMutation = useDeleteAepActivity(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-md"
      title="Delete Student Activity"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <h1 className="">Are you sure you want to delete this Activity?</h1>
      </div>
      <div className="mt-4 flex flex-row-reverse gap-4 bg-gray-50 px-4 py-3">
        <Button
          isLoading={deleteAepActivityMutation.isLoading}
          variant="secondary"
          width="max"
          onClick={() =>
            deleteAepActivityMutation.mutate({ activity_id: selectedData?.activity?.id ,student_id:selectedData?.student?.id})
          }
        >
          Delete
        </Button>
        <Button
          isDisabled={deleteAepActivityMutation.isLoading}
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
