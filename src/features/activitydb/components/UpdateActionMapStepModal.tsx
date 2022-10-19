import { Account } from "@/api";
import { BaseModal, Form, Button } from "@/shared/components";
import { useUpdateActionMapStep } from "@/shared/services/activity.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { useStoreData } from "@/shared/stores/modal.store";

export function UpdateActionMapStepModal({
  isOpen,
  action_step_id,
  action_step_data,
  action_map_phase
}: {
  isOpen: boolean;
}) {
  const updateActionMapStepMutation = useUpdateActionMapStep(() => {
    onModalClose();
  });
  const { isModalOpen, onModalClose, currModalKey, onModalOpen } = useModal();
  const { storedData } = useStoreData();

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[50%]"
      title="Update Action Map Step"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <Form<Account>
        form={{
          defaultValues: {
            action: action_step_data?.action,
            deadline_days: action_step_data?.deadline_days,
          },
        }}
        onSubmit={(formData) =>
          updateActionMapStepMutation.mutate({
            data: { ...formData,
            deadline_days: Number(formData.deadline_days) },
           
            action_step_id,
          })
        }
      >
        {({ register }) => (
          <div className="relative z-30 h-[60vh] w-full rounded-xl bg-white pb-20 overflow-y-scroll">
            <div className="w-[50%] mx-auto h-auto">
            <h1 className="mt-4 text-3xl text-black text-center font-bold text-[#6F6F6F]">
              {storedData?.activity_name}
            </h1>
            <h1 className="mt-6 text-xl text-black text-center font-bold text-[#6F6F6F]">
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
                isLoading={updateActionMapStepMutation.isLoading}
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
