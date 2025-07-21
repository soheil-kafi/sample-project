"use client";
import { useEffect } from "react";
import { useUserStore } from "../store/user";

export default function SetLogin() {
  const { setLogin } = useUserStore();

  useEffect(() => {
    setLogin(true);
  }, [setLogin]);
  return null;
}
