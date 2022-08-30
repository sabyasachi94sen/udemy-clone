import { Meta, Story } from "@storybook/react";

import { NotFound, NotFoundProps } from "./NotFound";

export default {
  title: "Libs/NotFound",
  component: NotFound,
} as Meta;

export const Default: Story<NotFoundProps> = (args) => <NotFound {...args} />;
Default.args = {};
