import { Meta, Story } from "@storybook/react";

import { Input, InputProps } from "./Input";

// This tells Storybook how to list your stories and provide information
export default {
  title: "Libs/Input",
  component: Input,
  argTypes: {},
} as Meta;

// With named export we define component's story
export const Default: Story<InputProps> = (args) => <Input {...args} />;
// Define default arguments for the Default story
Default.args = {};
