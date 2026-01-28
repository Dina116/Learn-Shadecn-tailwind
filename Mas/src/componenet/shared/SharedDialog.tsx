import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface SharedDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  primaryAction?: {
    text: string;
    onClick: () => void;
    disabled?: boolean;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function SharedDialog({
  open,
  onClose,
  title,
  children,
  primaryAction,
  secondaryAction,
  maxWidth = "xs",
}: SharedDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      // fullWidth
      dir="rtl"
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {(primaryAction || secondaryAction) && (
        <DialogActions>
          {secondaryAction && (
            <Button onClick={secondaryAction.onClick}>
              {secondaryAction.text}
            </Button>
          )}
          {primaryAction && (
            <Button
              onClick={primaryAction.onClick}
              variant="contained"
              disabled={primaryAction.disabled}
            >
              {primaryAction.text}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}
