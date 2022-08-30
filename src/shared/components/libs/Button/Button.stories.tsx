import { Meta, Story } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Libs/Button",
  component: Button,
  argTypes: {
    variant: { control: "select" },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>Button Text</Button>
);
Default.args = {
  // leadingAddOn: <MailIcon className="-ml-1 mr-3 w-5 h-5" aria-hidden="true" />,
  // trailingAddOn: <MailIcon className="-mr-1 ml-3 w-5 h-5" aria-hidden="true" />,
};
