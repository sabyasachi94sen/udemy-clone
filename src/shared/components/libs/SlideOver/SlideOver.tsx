import { Dialog, Transition } from "@headlessui/react";
import cx from "clsx";
import { Fragment } from "react";
import { HiX } from "react-icons/hi";

const WIDTH_MAPS: Record<string, string> = {
  sm: "max-w-md",
  base: "max-w-2xl",
  lg: "max-w-4xl",
};

type Width = "sm" | "base" | "lg";

export type SlideOverProps = {
  width?: Width;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  title: string;
  description?: string;
};

export function SlideOver({
  width = "base",
  footer,
  isOpen = false,
  onClose,
  title,
  description,
  children,
}: SlideOverProps): JSX.Element {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 flex pl-10 max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              {/* Width */}
              <div className={cx("w-screen", WIDTH_MAPS[width])}>
                <div className="flex flex-col h-full bg-white shadow-xl overflow-y-scroll">
                  {/* HEADER */}
                  <div className="bg-primary-500 px-4 py-6 sm:px-6">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-white text-lg font-medium">
                        {title}
                      </Dialog.Title>
                      <div className="flex items-center ml-3 h-7">
                        <button
                          className="bg-primary-500 text-gray-200 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                          type="button"
                          onClick={onClose}
                        >
                          <span className="sr-only">Close panel</span>
                          <HiX aria-hidden="true" className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    {description && (
                      <div className="mt-1">
                        <p className="text-gray-100 text-sm">{description}</p>
                      </div>
                    )}
                  </div>
                  {/*  */}

                  <div className="relative flex-1 mt-6 px-4 sm:px-6">
                    {/* Replace with your content */}
                    {children}
                    {/* /End replace */}
                  </div>

                  {/* FOOOTER */}
                  {footer && (
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      {footer}
                    </div>
                  )}
                  {/*  */}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
