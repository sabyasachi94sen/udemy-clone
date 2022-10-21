import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useCreateAdmin } from "@/shared/services/admin.service";
import { useModal } from "@/shared/stores/modal.store";
import { adminCreateValid } from "@/features/helpers/validations";
import { toast } from "react-hot-toast";


export function CreateAdminModal({ isOpen }: { isOpen: boolean }) {
  const { isModalOpen, onModalClose } = useModal();

  

  const createAdminMutaton = useCreateAdmin(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Create Admin"
      modalWidth="max-w-md"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <Form<Account>
          onSubmit={(formData) =>
            adminCreateValid.validate(formData,{abortEarly:false}).then((res)=>{
              createAdminMutaton.mutate({ data: formData })
            }).catch((err)=>{
              err.inner.map((item)=>{
                toast.error(item.message)
              })
            })
          }
        >
          {({ register }) => (
            <div className="space-y-3">
              <div className="space-y-3">
                <Input
                  label="Name"
                  {...register("name")}
                  // TODO: to be used with form vadlidation library
                  // isInvalid
                  // showErrorIcon
                  // invalidText="Invalid email"
                  isRequired={true}
                />
                <Input label="Email" {...register("email")} 
                 isRequired={true}
                
                />
              </div>

              <div className="mx-auto flex justify-center">
                <Button
                  isLoading={createAdminMutaton.isLoading}
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
