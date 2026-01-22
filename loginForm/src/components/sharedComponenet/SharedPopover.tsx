import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type React from "react";

export type PopoverProps = {
  onClick: () => void;
  children: React.ReactNode;
  btnname: string;
};
export function SharedPopover({ btnname, children, onClick }: PopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-sky-700 hover:bg-sky-700">{children}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-30" onClick={onClick}>
        <div className="flex flex-row justify-center items-center">
          <Button className="bg-white hover:bg-white text-center text-black text-muted-foreground text-sm">
            {btnname}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
