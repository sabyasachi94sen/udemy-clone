import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import cx from "clsx";
import React, { Fragment } from "react";
import { HiX } from "react-icons/hi";

export type BaseModalProps = React.PropsWithChildren<{
  isOpen: boolean;
  onRequestClose: () => void;
  title?: string;
  description?: string;
  footerCloseButtonText?: string;
  hasFooter?: boolean;
  hasHeader?: boolean;
  showHeaderCloseButton?: boolean;
}>;

export function BaseModal({
  isOpen = false, // By default if modal is not opened
  onRequestClose = () => {},
  description,
  children,
  title,
  modalWidth,
  hasFooter = false,
  hasHeader = true,
  showHeaderCloseButton = false,
}: BaseModalProps): JSX.Element {
  // TODO: Write docs for usage
  // TODO: think over the whole modal managing flow

  return (
    
    <DialogPrimitive.Root open={isOpen} onOpenChange={onRequestClose}>
      {/* Doubble negation to convert to boolean values */}
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay
            forceMount
            className="fixed inset-0 z-20 bg-black/50"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPrimitive.Content
            forceMount
            className={cx(
              "fixed z-50",
              "bg-white",
              `w-[95vw] ${modalWidth} rounded-md md:w-full`,
              "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            )}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {title && (
              <DialogPrimitive.Title className="flex items-start justify-between rounded-tr-md rounded-tl-md bg-gray-50 px-6 py-4 text-lg font-bold">
                {title}
              </DialogPrimitive.Title>
            )}
            {description && (
              <DialogPrimitive.Description className="mt-2 font-normal text-neutral">
                {description}
              </DialogPrimitive.Description>
            )}

            {false && (
              <DialogPrimitive.Close
                className={cx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                )}
              >
                <HiX className="h-4 w-4 text-gray-500 hover:text-gray-700" />
              </DialogPrimitive.Close>
            )}

            {children}
          </DialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogPrimitive.Root>
  );
}
