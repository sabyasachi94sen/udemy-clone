import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import clsx from "clsx";
import React from "react";

type ButtonProps = Omit<React.ComponentProps<"button">, "className"> & {};

interface IconButtonProps extends ButtonProps {
  toolTipText?: string;
  children: React.ReactNode;
}
export function IconButton({
  toolTipText,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button {...rest} type="button">
            {children}
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          className={clsx(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "inline-flex items-center rounded-md px-4 py-2.5",
            "z-50 bg-primary shadow-md",
          )}
          sideOffset={4}
        >
          <TooltipPrimitive.Arrow className="fill-current text-primary" />
          <span className="block text-xs leading-none text-white">
            {toolTipText}
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
