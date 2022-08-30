import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { RiCloseLine } from "react-icons/ri";

export type BaseModalProps = React.PropsWithChildren<{
  isOpen: boolean;
  onRequestClose: () => void;
  title?: string;
  footerCloseButtonText?: string;
  hasFooter?: boolean;
  hasHeader?: boolean;
  showHeaderCloseButton?: boolean;
  isClosable: () => void;
}>;

export function BaseModal({
  isOpen = false, // By default if modal is not opened
  onRequestClose = () => {},
  children,
  title,
  footerCloseButtonText = "Close",
  hasFooter = false,
  hasHeader = true,
  showHeaderCloseButton = true,
  isClosable = () => false,
}: BaseModalProps): JSX.Element {
  // TODO: Write docs for usage
  // TODO: think over the whole modal managing flow

  return (
    <>
      {/* Doubble negation to convert to boolean values */}
      <Transition appear as={Fragment} show={!!isOpen}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={isClosable && onRequestClose}
        >
          <div className="px-4 min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-lg backdrop-filter" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              aria-hidden="true"
              className="inline-block align-middle h-screen"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block align-middle my-8 w-full max-w-md text-left bg-white rounded-md shadow-xl overflow-hidden transform transition-all">
                {hasHeader && (
                  <Dialog.Title
                    as="h3"
                    className="flex items-start justify-between px-6 py-4 text-gray-900 text-lg font-medium leading-6 bg-gray-50"
                  >
                    {title}

                    {showHeaderCloseButton && (
                      <button
                        type="button"
                        onClick={isClosable && onRequestClose}
                      >
                        <RiCloseLine className="text-2xl focus:outline-none opacity-75 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" />
                      </button>
                    )}
                  </Dialog.Title>
                )}

                {/* ACTUAL CONTENT */}
                {children}
                {/*  */}

                {hasFooter && (
                  <div className="mt-4 px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      className="text-primary-900 bg-primary-100 hover:bg-primary-200 focus-visible:ring-primary-500 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      type="button"
                      onClick={isClosable && onRequestClose}
                    >
                      {footerCloseButtonText}
                    </button>
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
