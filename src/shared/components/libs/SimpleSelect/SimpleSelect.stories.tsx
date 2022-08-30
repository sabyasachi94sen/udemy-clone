import { Meta, Story } from "@storybook/react";

import { SimpleSelect, SimpleSelectProps } from "./SimpleSelect";

export default {
  title: "Libs/SimpleSelect",
  component: SimpleSelect,
} as Meta;

export const Default: Story<SimpleSelectProps> = (args) => (
  <SimpleSelect {...args}>
    <option>USA</option>
    <option>Canada</option>
    <option>EU</option>
  </SimpleSelect>
);
Default.args = {};
