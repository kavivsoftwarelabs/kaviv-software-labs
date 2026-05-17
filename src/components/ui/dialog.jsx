import React, { Fragment } from "react";
import {
  Dialog as HDialog,
  Transition,
  DialogBackdrop,
  DialogTitle as HDialogTitle,
  DialogDescription as HDialogDescription,
} from "@headlessui/react";

// A wrapper that matches the previously used API: Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription
export function Dialog({ children, open = false, onOpenChange = () => {} }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <HDialog as="div" className="fixed inset-0 z-50" onClose={(v) => onOpenChange(v)}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">\u200B</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-offwhite border border-navy-100 rounded-2xl shadow-xl">
              {children}
            </div>
          </Transition.Child>
        </div>
      </HDialog>
    </Transition>
  );
}

export const DialogContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const DialogHeader = ({ children }) => <div className="mb-2">{children}</div>;
export const DialogTitle = ({ children, className = "" }) => (
  <HDialogTitle as="h3" className={className}>
    {children}
  </HDialogTitle>
);
export const DialogDescription = ({ children, className = "" }) => (
  <HDialogDescription className={className}>{children}</HDialogDescription>
);
