import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import { BaseModal, BaseModalProps } from "./BaseModal";

export default {
  title: "Libs/BaseModal",
  component: BaseModal,
} as Meta;

export const Default: Story<BaseModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <BaseModal
        {...args}
        isOpen={open}
        title="Add Photos"
        onRequestClose={() => setOpen(false)}
      >
        <div className="p-6">
          <h1 className="text-5xl">Shovan</h1>
        </div>
      </BaseModal>
    </>
  );
};
Default.args = {};
