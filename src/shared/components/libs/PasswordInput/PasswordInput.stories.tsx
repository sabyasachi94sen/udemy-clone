import { Meta, Story } from "@storybook/react";

import { PasswordInput, PasswordInputProps } from "./PasswordInput";

export default {
  title: "Libs/PasswordInput",
  component: PasswordInput,
} as Meta;

export const Default: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);
Default.args = {};
