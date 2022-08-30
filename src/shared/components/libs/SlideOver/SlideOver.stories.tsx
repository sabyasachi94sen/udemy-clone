import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import { SlideOver, SlideOverProps } from "./SlideOver";

export default {
  title: "Libs/SlideOver",
  component: SlideOver,
} as Meta;

export const Default: Story<SlideOverProps> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <SlideOver {...args} isOpen={open} onClose={() => setOpen(false)}>
      <div className="absolute inset-0 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="h-full border-2 border-dashed border-gray-200"
        />
      </div>
    </SlideOver>
  );
};

Default.args = {
  footer: (
    <>
      {" "}
      <button
        className="focus:ring-primary-500 px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300 rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-offset-2"
        type="button"
        onClick={() => setOpen(false)}
      >
        Cancel
      </button>
      <button
        className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex justify-center ml-4 px-4 py-2 text-white text-sm font-medium border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-offset-2"
        type="submit"
      >
        Save
      </button>
    </>
  ),
};
