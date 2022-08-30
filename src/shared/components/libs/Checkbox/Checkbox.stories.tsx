import { Meta, Story } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Libs/Checkbox",
  component: Checkbox,
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
Default.args = {};
