"use client";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../api/users";

export default function AddUser() {
  const [open, setOpen] = useState(false);

  const addColor = () => {
    document
      .getElementById("add-dialog")
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

    const { name, about, address } = e.target;

    const content = {
      name: name.value.trim(),
      about: about.value,
      address: address.value,
    };

    const { status } = await addUser(content);

    if (status == 201) {
      handleClickClose();
      alert("create user was successful");
      window.location.reload();
    } else {
      alert("there was a problem");
      handleClickClose();
    }
  };
  return (
    <>
      <Button
        size="large"
        variant="contained"
        className="text-color bg-secondary-color"
        onClick={handleClickOpen}
      >
        <Typography variant="button">add user</Typography>
      </Button>
      <Dialog open={open} onClose={handleClickClose} id="add-dialog">
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add User</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ marginRight: "15px" }}
              label="name"
              variant="standard"
              name="name"
            />
            <TextField label="address" variant="standard" name="address" />
            <br />
            <TextField
              label="about"
              variant="standard"
              name="about"
              sx={{ width: "100%", marginTop: "10px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              size="medium"
              variant="contained"
              className="!bg-emerald-800"
            >
              <Typography variant="button">confirm</Typography>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
