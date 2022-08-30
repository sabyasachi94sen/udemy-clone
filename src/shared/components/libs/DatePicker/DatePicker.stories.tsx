import { Meta, Story } from "@storybook/react";

import { DatePicker, DatePickerProps } from "./DatePicker";

export default {
  title: "Libs/DateTimePicker",
  component: DatePicker,
} as Meta;

export const Default: Story<DatePickerProps> = (args) => (
  <DatePicker {...args} />
);
Default.args = {};
