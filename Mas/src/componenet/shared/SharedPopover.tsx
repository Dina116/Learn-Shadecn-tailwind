import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

type SharedPopoverProps = {
  onClick: () => void;
  children: React.ReactNode;
  btnname: string;
};
export default function SharedPopover({
  btnname,
  children,
  onClick,
}: SharedPopoverProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div
        onClick={handleClick}
        className="bg-transparent hover:bg-transparent cursor-pointer w-8 h-8 flex items-center justify-center text-white"
      >
        {children}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="flex flex-row justify-center items-center">
          <Button
            className="bg-white hover:bg-white text-center text-black text-muted-foreground text-sm"
            onClick={onClick}
          >
            {btnname}
          </Button>
        </div>
      </Popover>
    </div>
  );
}
