import { Meta, Story } from "@storybook/react";

import { Popover, PopoverProps } from "./Popover";

export default {
  title: "Libs/Popover",
  component: Popover,
} as Meta;

export const Default: Story<PopoverProps> = (args) => <Popover {...args} />;
Default.args = {};
