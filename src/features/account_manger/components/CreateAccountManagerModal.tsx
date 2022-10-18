import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useCreateAccountManager } from "@/shared/services/account-manager.service";
import { useModal } from "@/shared/stores/modal.store";

export function CreateAccountManagerModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose } = useModal();



  const createAccountManagerMutation = useCreateAccountManager(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Create Account Manager"
      modalWidth="max-w-md"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <Form<Account>
          onSubmit={(formData) =>
            createAccountManagerMutation.mutate({ data: formData })
          }
        >
          {({ register }) => (
            <div className="space-y-3">
              <div className="space-y-3">
                <Input
                  label="Name"
                  {...register("manager_name")}
                  isRequired={true}
                  // TODO: to be used with form vadlidation library
                  // isInvalid
                  // showErrorIcon
                  // invalidText="Invalid email"
                />
               
                <Input label="Email" {...register("email")}
                isRequired={true} 
                />
              
              </div>

              <div className="mx-auto flex justify-center">
                <Button
                  isLoading={createAccountManagerMutation.isLoading}
                  type="submit"
                  width="full"
                  
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </BaseModal>
  );
}
