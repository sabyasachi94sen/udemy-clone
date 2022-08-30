import { Meta, Story } from "@storybook/react";

import { LoadingSpinner, LoadingSpinnerProps } from "./LoadingSpinner";

// This tells Storybook how to list your stories and provide information
export default {
  title: "Libs/LoadingSpinner",
  component: LoadingSpinner,
  argTypes: {
    variant: { control: "select" },
  },
} as Meta;

// With named export we define component's story
export const Default: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);
