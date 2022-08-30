import { Meta, Story } from "@storybook/react";

import { Toggle, ToggleProps } from "./Toggle";

export default {
  title: "Libs/Toggle",
  component: Toggle,
} as Meta;

export const Default: Story<ToggleProps> = (args) => <Toggle {...args} />;
Default.args = {};
