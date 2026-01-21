import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { DialogProps } from "@/pages/sharedTypes";
import { useState } from "react";

export function SharedDialog(props: DialogProps) {
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="default" className={props.className}>
            {props.showPlusIcon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white "
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
            {props.btnName}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-right mt-5 text-gray-500">
              {props.title}
            </DialogTitle>
          </DialogHeader>
          <hr className="mt-1 border-gray-200" />
          {typeof props.children === "function"
            ? props.children(closeDialog)
            : props.children}
        </DialogContent>
      </form>
    </Dialog>
  );
}
