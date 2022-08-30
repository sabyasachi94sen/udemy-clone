import { Meta, Story } from "@storybook/react";
import toast, { Toaster } from "react-hot-toast";

import { Toast, ToastProps } from "./Toast";

export default {
  title: "Libs/Toast",
  component: Toast,
} as Meta;

export const Default: Story<ToastProps> = (args) => {
  const notify = ({
    status,
    title,
    description,
  }: {
    status?: "error" | "success" | "info" | undefined;
    title: string;
    description?: string;
  }) =>
    toast.custom((t) => (
      <Toast
        {...args}
        description={description}
        status={status}
        title={title}
        visible={t.visible}
        onClose={() => toast.dismiss(t.id)}
      />
    ));

  return (
    <>
      <button
        type="button"
        onClick={() => notify({ status: "info", title: "helloAPI" })}
      >
        Make me a toast
      </button>
      <Toaster />
    </>
  );
};
Default.args = {};
