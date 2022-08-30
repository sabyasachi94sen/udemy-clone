import { Meta, Story } from "@storybook/react";

import { TextAreaInput, TextAreaInputProps } from "./TextAreaInput";

export default {
  title: "Libs/TextAreaInput",
  component: TextAreaInput,
  argTypes: {},
} as Meta;

export const Default: Story<TextAreaInputProps> = (args) => (
  <TextAreaInput {...args} />
);
Default.args = {};
