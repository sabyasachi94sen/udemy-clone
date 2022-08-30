import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export type DropdownMenuProps = {
  menuButton: React.ReactNode;
  menuItemsChildren: React.ReactNode;
};

export function DropdownMenu({
  menuButton,
  menuItemsChildren,
}: DropdownMenuProps): JSX.Element {
  return (
    <Menu as="div" className="relative inline-block mt-6 px-3 text-left">
      <div>
        <Menu.Button className="group px-3.5 py-2 w-full text-left text-gray-700 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {/*  */}
          {menuButton}
          {/*  */}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 left-7 top-0 mt-1 mx-3 w-max bg-white rounded-md focus:outline-none shadow-lg divide-gray-200 divide-y origin-top ring-1 ring-black ring-opacity-5">
          {/* the active state is passed to direct child component */}
          <> {menuItemsChildren} </>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
