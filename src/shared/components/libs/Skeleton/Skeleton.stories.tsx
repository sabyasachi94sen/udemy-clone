import { Meta, Story } from "@storybook/react";

import { Skeleton, SkeletonProps } from "./Skeleton";

export default {
  title: "Libs/Skeleton",
  component: Skeleton,
} as Meta;

export const Default: Story<SkeletonProps> = (args) => (
  <Skeleton {...args}>
    <p className="h-8">hello</p>
  </Skeleton>
);
Default.args = {};
