"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

function Sheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      {...props}
    />
  );
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      {...props}
    />
  );
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return (
    <SheetPrimitive.Portal
      data-slot="sheet-portal"
      {...props}
    />
  );
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Backdrop>) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/40",
        "data-open:animate-in data-open:fade-in-0",
        "data-closed:animate-out data-closed:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Popup> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Popup
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col bg-background text-foreground shadow-2xl outline-none",
          "transition ease-in-out",
          "data-open:animate-in data-closed:animate-out",
          "data-open:duration-500 data-closed:duration-300",

          side === "right" && [
            "inset-y-0 right-0 h-full",
            "w-full sm:w-[400px]",
            "border-l border-border",
            "data-open:slide-in-from-right",
            "data-closed:slide-out-to-right",
          ],

          side === "left" && [
            "inset-y-0 left-0 h-full",
            "w-full sm:w-[400px]",
            "border-r border-border",
            "data-open:slide-in-from-left",
            "data-closed:slide-out-to-left",
          ],

          side === "top" && [
            "inset-x-0 top-0",
            "border-b border-border",
            "data-open:slide-in-from-top",
            "data-closed:slide-out-to-top",
          ],

          side === "bottom" && [
            "inset-x-0 bottom-0",
            "border-t border-border",
            "data-open:slide-in-from-bottom",
            "data-closed:slide-out-to-bottom",
          ],

          className,
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <SheetPrimitive.Close
            aria-label="Close navigation menu"
            className={cn(
              "absolute top-6 right-5 z-10",
              "inline-flex size-9 items-center justify-center",
              "rounded-md",
              "text-muted-foreground",
              "transition-colors duration-200",
              "hover:bg-muted hover:text-foreground",
              "focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            <X className="size-5" />
            <span className="sr-only">Close navigation menu</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex flex-col gap-1 px-6 pt-6 pb-5 sm:px-7",
        className,
      )}
      {...props}
    />
  );
}

function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col gap-3 px-6 py-6 sm:px-7",
        className,
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-lg font-semibold text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        "text-sm text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};