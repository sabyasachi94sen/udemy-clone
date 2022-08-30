import { Meta, Story } from "@storybook/react";

import { SearchInput, SearchInputProps } from "./SearchInput";

export default {
  title: "Libs/SearchInput",
  component: SearchInput,
} as Meta;

export const Default: Story<SearchInputProps> = (args) => (
  <SearchInput {...args} />
);
Default.args = {};
