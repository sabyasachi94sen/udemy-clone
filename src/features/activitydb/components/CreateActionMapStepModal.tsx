import { Account } from "@/api";
import { BaseModal, Form, Button } from "@/shared/components";
import { useCreateActionMapStep } from "@/shared/services/activity.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useStoreData } from "@/shared/stores/modal.store";

export function CreateActionMapStepModal({
  isOpen,
  action_map,
  action_map_phase,
}: {
  isOpen: boolean;
}) {
  const { storedData } = useStoreData();

  const createActionMapStepMutation = useCreateActionMapStep(() => {
    onModalClose();
  });
  const { isModalOpen, onModalClose, currModalKey, onModalOpen } = useModal();

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[50%]"
      title="Add Action Map Step"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <Form<Account>
        onSubmit={(formData) =>
          createActionMapStepMutation.mutate({
            data: { ...formData, action_map, activity: Number(storedData.activity_id) ,deadline_days: Number(formData.deadline_days)},
          })
        }
      >
        {({ register }) => (
          <div className="relative z-30 h-[60vh] w-full rounded-xl bg-white pb-20 overflow-y-scroll">
            <div className="w-[50%] mx-auto h-auto">
            <h1 className="mt-4 mr-48 text-3xl font-bold text-[#6F6F6F]">
              {storedData?.activity_name}
            </h1>
            <h1 className="mt-6 text-3xl font-bold text-[#6F6F6F]">
              {action_map_phase}
            </h1>
            </div>
            <div className="mx-auto w-[70%]">
              <div className="mt-16 flex items-center">
                <span className="text-lg font-bold text-[#344054]">Action</span>
                <input
                  className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
                  // defaultValue={header==="Edit Action Map Step"?stepData?.action: null}
                  type="text"
                  {...register("action")}
                />
                <br />
              </div>
              <div className="mt-14 flex items-center">
                <span className="text-lg font-bold text-[#344054]">
                  Enter number of days
                </span>
                <input
                  className="relative ml-10 h-[6vh] w-[30%] rounded-md bg-[#EEEE]"
                  // defaultValue={header==="Edit Action Map Step"?stepData?.deadline_days: null}
                  type="number"
                  {...register("deadline_days")}
                />
                <br />
              </div>
            </div>

            <div className="mx-auto mt-6 mb-6 flex justify-center">
              <Button
                isLoading={createActionMapStepMutation.isLoading}
                type="submit"
                width="w-[25%]"
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </Form>
    </BaseModal>
  );
}
