import { Controller } from "react-hook-form";
import { adminUpdateValid } from "@/features/helpers/validations";
import { toast } from "react-hot-toast";

import { Account } from "@/api";
import {
  BaseModal,
  Button,
  Form,
  Input,
  SelectDynamic,
} from "@/shared/components";
import { useUpdateAdmin } from "@/shared/services/admin.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { GetUserType } from "@/features/helpers";

export function UpdateAdminModal({ isOpen }: { isOpen: boolean }) {
  // Ref: https://github.com/pmndrs/zustand/discussions/841
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const updateAdminMutation = useUpdateAdmin(() => {
    onModalClose();
  });

  const userType=GetUserType()

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Edit Admin Details"
      modalWidth="max-w-md"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto min-w-[20rem] max-w-6xl p-8 sm:p-4 sm:py-8">
        <Form<Account>
          form={{
            defaultValues: {
              email: selectedData?.email,
              username: selectedData?.username,
              is_active: selectedData?.is_active,
              role: selectedData?.is_admin?"admin": null || selectedData?.is_account_manager?"accountmanager": null || selectedData?.is_super_admin?"superadmin": null,
            },
          }}
          onSubmit={(formData) =>{
           

            adminUpdateValid.validate(formData,{abortEarly: false}).then((res)=>{
              updateAdminMutation.mutate({
                id: selectedData?.id,
                data: formData,
              })
            }).catch((err)=>{
              err.inner.map((item)=>{
                 toast.error(item.message)
              })
            })
          }
          }
        >
          {({ register, control, watch }) => {
            const selectedActiveStatus = watch("is_active");

            return (
              <div className="space-y-3">
                <div className="space-y-3">
                  <Input
                    label="Name"
                    {...register("username")}
                    // TODO: to be used with form vadlidation library
                    // isInvalid
                    // showErrorIcon
                    // invalidText="Invalid email"
                  />
                  <Input label="Email" {...register("email")} />
                  <Controller
                    control={control}
                    name="is_active"
                    render={({ field }) => (
                      <SelectDynamic
                        {...field}
                        label="Active Status"
                        options={[
                          { value: true, label: "Active" },
                          { value: false, label: "Inactive" },
                        ]}
                      />
                    )}
                  />
                  
                  
                  <Controller
                    control={control}
                    name="role"
                    render={({ field }) => (
                      <SelectDynamic
                        {...field}
                        label="Change Role"
                        options={[
                          { value: "admin", label: "Admin" },
                          { value: "superadmin", label: "Super Admin" },
                          { value: "accountmanager", label: "Account Manager" },
                        ]}
                      />
                    )}
                  /> 



                  {/* {selectedActiveStatus === false && (
                    <TextAreaInput
                      label="Reason for Inactive"
                      {...register("reason")}
                    />
                  )} */}
                </div>

                <div className="mx-auto flex justify-center">
                  <Button
                    isLoading={updateAdminMutation.isLoading}
                    type="submit"
                    width="full"
                  >
                    Save
                  </Button>
                </div>
              </div>
            );
          }}
        </Form>
      </div>
    </BaseModal>
  );
}
