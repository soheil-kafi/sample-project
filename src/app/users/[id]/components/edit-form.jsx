"use client";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { editUserById } from "./../../../api/users";

export default function EditForm({ user }) {
  const userData = user;
  const [open, setOpen] = useState(false);
  const addColor = () => {
    document
      .getElementById("edit-dialog")
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = {
      name: e.target.name.value.trim(),
      address: e.target.address.value.trim(),
    };
    if (content.name == user.name && content.address == user.address) {
      alert("you make no changes");
      handleClickClose();
    } else {
      const response = await editUserById(user.id, content);
      console.log(response);
      if (response.status == 200) {
        alert("change information was successful");
        handleClickClose();
        window.location.reload();
      } else {
        alert("something went wrong");
        handleClickClose();
      }
    }
  };
  return (
    <>
      <Button
        size="medium"
        variant="contained"
        className="light-color bg-primary-color"
        onClick={handleClickOpen}
      >
        <Typography variant="button">edit</Typography>
      </Button>
      <Dialog open={open} onClose={handleClickClose} id="edit-dialog">
        <form onSubmit={handleSubmit}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ marginRight: "15px" }}
              label="name"
              variant="standard"
              defaultValue={userData.name}
              name="name"
            />
            <TextField
              label="address"
              variant="standard"
              defaultValue={userData.address}
              name="address"
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              size="medium"
              variant="contained"
              className="!bg-emerald-800"
            >
              <Typography variant="button">Change information</Typography>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
