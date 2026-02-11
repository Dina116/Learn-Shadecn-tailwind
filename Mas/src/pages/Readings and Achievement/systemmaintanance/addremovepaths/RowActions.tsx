import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import type { collectorType } from "./types";
import type { WalkPath } from "../switchcollectorspath/types";

export type RowActionsProps = {
  row: WalkPath;
  onAction: (type: string) => void;
};
export const RowActions = ({ row, onAction }: RowActionsProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (actionType: string) => {
    console.log(`Action: ${actionType} for row:`, row);
    onAction(actionType);
    handleClose();
  };

  return (
    <div>
      <IconButton size="small" onClick={handleClick}>
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => handleAction("transfer_collection")}>
          نقل عهدة تحصيل
        </MenuItem>
        <MenuItem onClick={() => handleAction("transfer_reading")}>
          نقل عهدة قراءة
        </MenuItem>
        <MenuItem
          onClick={() => handleAction("transfer_collection&transfer_reading")}
        >
          نقل عهدة قراءة وتحصيل
        </MenuItem>
      </Menu>
    </div>
  );
};
