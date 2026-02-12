import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";

export type AlertDialogProps = {
  btnname: string;
  title: string;
  content: string;
  onDelete: () => void;
  children?: React.ReactNode;
};
export default function AlertDialog({
  btnname,
  content,
  title,
  onDelete,
  children,
}: AlertDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onDelete();
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        size="small"
        sx={{
          height: 30,
          border: "none",
          "&:hover": {
            border: "none",
          },
        }}
      >
        {btnname}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            color: "gray",
          }}
        >
          {title}
        </DialogTitle>
        <Divider sx={{ color: "gray" }} />
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            {content}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{ border: 1, borderColor: "red" }}
            variant="outlined"
          >
            الغاء
          </Button>
          <Button onClick={handleClose} autoFocus variant="contained">
            حفظ
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
