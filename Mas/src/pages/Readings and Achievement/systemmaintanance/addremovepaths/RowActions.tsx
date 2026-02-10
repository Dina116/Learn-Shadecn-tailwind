import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const RowActions = ({ row }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (actionType) => {
    console.log(`Action: ${actionType} for row:`, row);
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => handleAction('transfer_collection')}>نقل عهدة تحصيل</MenuItem>
        <MenuItem onClick={() => handleAction('transfer_reading')}>نقل عهدة قراءة</MenuItem>
        <MenuItem onClick={() => handleAction('transfer_both')}>نقل عهدة قراءة وتحصيل</MenuItem>
      </Menu>
    </div>
  );
};