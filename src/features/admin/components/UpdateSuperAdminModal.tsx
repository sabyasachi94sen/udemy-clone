import { Controller } from "react-hook-form";

import { Account } from "@/api";
import {
  BaseModal,
  Button,
  Form,
  Input,
  SelectDynamic,
} from "@/shared/components";
import { useUpdateSuperAdmin } from "@/shared/services/super-admin.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";

export function UpdateSuperAdminModal({}) {
  // Ref: https://github.com/pmndrs/zustand/discussions/841
  const { isModalOpen, onModalClose, selectedData } =
    useModal() as ModalState<Account>;

  const updateSuperAdminMutation = useUpdateSuperAdmin(() => {
    onModalClose();
  });

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen}
      title="Edit Super Admin"
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
            },
          }}
          onSubmit={(formData) =>
            updateSuperAdminMutation.mutate({
              id: selectedData?.id,
              data: formData,
            })
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
                  {/* {selectedActiveStatus === false && (
                    <TextAreaInput
                      label="Reason for Inactive"
                      {...register("reason")}
                    />
                  )} */}
                </div>

                <div className="mx-auto flex justify-center">
                  <Button
                    isLoading={updateSuperAdminMutation.isLoading}
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
