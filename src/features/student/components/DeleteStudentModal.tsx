import { Account } from "@/api";
import { BaseModal, Button } from "@/shared/components";
import { useDeleteStudent } from "@/shared/services/student.sevices";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export function DeleteStudentModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const deleteStudentMutation = useDeleteStudent(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Delete student"
      modalWidth="max-w-md"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <h1 className="">Are you sure you want to delete this Student?</h1>
      </div>
      <div className="mt-4 flex flex-row-reverse gap-4 bg-gray-50 px-4 py-3">
        <Button
          isLoading={deleteStudentMutation.isLoading}
          variant="secondary"
          width="max"
          onClick={() =>
            deleteStudentMutation.mutate({ id: selectedData?.id })
          }
        >
          Delete
        </Button>
        <Button
          isDisabled={deleteStudentMutation.isLoading}
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
