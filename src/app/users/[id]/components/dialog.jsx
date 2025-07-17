"use client";
import { deleteUserById } from "../../../api/users";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AgreedDialog({ user, id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const addColor = () => {
    document
      .getElementById("delete-dialog")
      ?.children[2]?.children[0]?.classList.add(
        "bg-primary-color",
        "light-color"
      );
  };
  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      addColor();
    }, 1);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleAgreed = async () => {
    const response = await deleteUserById(id);
    if (response.status == 200) {
      alert(`user ${response.data.name} deleted!`);
      handleClickClose();
      router.push("/users");
    }
  };

  return (
    <>
      <Button
        size="medium"
        variant="contained"
        className="!bg-amber-900"
        onClick={handleClickOpen}
      >
        <Typography variant="button">Delete</Typography>
      </Button>
      <Dialog open={open} onClose={handleClickClose} id="delete-dialog">
        <DialogTitle>are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText className="light-color">
            are you sure you want delete user : {user}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClickClose}
            size="medium"
            variant="contained"
            className="!bg-emerald-800"
          >
            Nope
          </Button>
          <Button
            onClick={handleAgreed}
            autoFocus
            size="medium"
            variant="contained"
            className="!bg-amber-900"
          >
            Yeah
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
