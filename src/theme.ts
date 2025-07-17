"use client";
import { createTheme } from "@mui/material/styles";
import { color } from "framer-motion";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#eeeeee",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:after": {
            borderBottomColor: "#ffd369",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#eeeeee",
          "&.Mui-focused": {
            color: "#ffd369",
          },
        },
      },
    },
  },
});

export default theme;
