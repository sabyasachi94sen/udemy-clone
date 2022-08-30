import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  HiX,
  HiCheckCircle,
  HiXCircle,
  HiInformationCircle,
} from "react-icons/hi";

export type ToastProps = {
  status?: "error" | "success" | "info" | undefined;
  title: string;
  description?: string;
  onClose?: () => void;
  visible: boolean;
};

export function Toast({
  status,
  title,
  description,
  onClose,
  visible,
}: ToastProps): JSX.Element {
  return (
    <>
      {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
      <Transition
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={visible}
      >
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto overflow-hidden ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {status === "info" && (
                  <HiInformationCircle
                    aria-hidden="true"
                    className="w-6 h-6 text-blue-500"
                  />
                )}

                {status === "error" && (
                  <HiXCircle
                    aria-hidden="true"
                    className="w-6 h-6 text-red-400"
                  />
                )}
                {status === "success" && (
                  <HiCheckCircle
                    aria-hidden="true"
                    className="w-6 h-6 text-green-400"
                  />
                )}
              </div>
              <div className="flex-1 ml-3 pt-0.5 w-0">
                <p className="text-gray-900 text-sm font-medium">{title}</p>
                {description && (
                  <p className="mt-1 text-gray-500 text-sm">{description}</p>
                )}
              </div>
              {onClose && (
                <div className="flex flex-shrink-0 ml-4">
                  <button
                    className="inline-flex text-gray-400 hover:text-gray-500 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    type="button"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <HiX aria-hidden="true" className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
