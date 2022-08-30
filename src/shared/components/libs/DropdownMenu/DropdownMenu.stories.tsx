import { Menu } from "@headlessui/react";
import { Meta, Story } from "@storybook/react";
import cx from "clsx";

import { DropdownMenu, DropdownMenuProps } from "./DropdownMenu";

export default {
  title: "Libs/DropdownMenu",
  component: DropdownMenu,
} as Meta;

export const Default: Story<DropdownMenuProps> = (args) => (
  <DropdownMenu {...args} />
);
Default.args = {
  menuButton: <MenuButton />,
  menuItemsChildren: (
    <>
      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={cx(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "group flex items-center px-4 py-2 text-sm "
              )}
              type="button"
            >
              View profile
            </button>
          )}
        </Menu.Item>
      </div>
    </>
  ),
};

function MenuButton() {
  return (
    <span className="flex items-center justify-between w-full">
      <span className="flex items-center justify-between min-w-0 space-x-3">
        down
      </span>
    </span>
  );
}
