"use client";
import { Box, Button, dividerClasses, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/user";
import { useEffect } from "react";

export default function LoginForm() {
  const login = useUserStore((state) => state.login);
  const router = useRouter();

  console.log({
    username: "admin",
    password: "1234",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    res.ok
      ? router.push("/admin")
      : alert(
          "username or password is incorrect , check the console for correct information"
        );
  };

  useEffect(() => {
    if (login) {
      router.push("/admin");
    }
  }, [login, router]);
  if (login) {
    return <div className="light-color">redirect....</div>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <TextField
            label="username"
            variant="standard"
            name="username"
            sx={{ width: "45%" }}
          />
          <TextField
            label="password"
            variant="standard"
            name="password"
            sx={{ width: "45%" }}
          />
        </div>
        <Box className="flex flex-row-reverse mt-3" sx={{ width: "100%" }}>
          <Button
            type="submit"
            size="medium"
            variant="contained"
            className="!bg-emerald-800"
          >
            submit
          </Button>
        </Box>
      </form>
    );
  }
}
