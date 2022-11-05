import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IDialog {
  open?: any;
  handleClose?: () => void;
  title?: string;
  children?: any;
  handleDisagree: () => void;
  handleAgree: () => void;
  handleAgreeText?: string;
  handleDisagreeText?: string;
}

const SystemDialog: React.FC<IDialog> = (props) => {
  const {
    open,
    handleClose,
    title,
    children,
    handleDisagree,
    handleAgree,
    handleAgreeText,
    handleDisagreeText,
  } = props;
  return (
    <>
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>{handleDisagreeText}</Button>
          <Button onClick={handleAgree} autoFocus>
            {handleAgreeText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SystemDialog;
