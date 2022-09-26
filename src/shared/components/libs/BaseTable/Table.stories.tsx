import { Meta, Story } from "@storybook/react";

// import Table, { TableProps } from "./Table";
import { TableContainer, TableContainerProps } from "./TableContainer";

export default {
  title: "Libs/Table",
  component: TableContainer,
} as Meta;

export const Default: Story<TableContainerProps> = (args) => (
  <TableContainer {...args} />
);
Default.args = {};
