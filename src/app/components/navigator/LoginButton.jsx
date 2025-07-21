"use client";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useUserStore } from "./../../store/user";

export default function LoginButton() {
  const login = useUserStore((state) => state.login);
  if (login) {
    return (
      <Link href="/admin">
        <Button
          size="small"
          variant="contained"
          className={`light-color bg-primary-color`}
        >
          <Typography variant="button">Admin</Typography>
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href="/login">
        <Button
          size="small"
          variant="contained"
          className={`light-color bg-primary-color`}
        >
          <Typography variant="button">login</Typography>
        </Button>
      </Link>
    );
  }
}
