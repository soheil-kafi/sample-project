import { Container, Button, Typography } from "@mui/material";

import Link from "next/link";
import LoginButton from "./LoginButton";
export default function Navigator() {
  return (
    <header className="w-full bg-secondary-color text-color py-3">
      <Container>
        <nav className="flex justify-between align-middle">
          <a href="https://github.com/soheil-kafi" target="about:blank">
            <h1 className=" text-2xl">soheil kafi</h1>
          </a>
          <div className=" text-2xl  flex justify-between gap-3">
            <Link href="/users">
              <Button
                size="small"
                variant="contained"
                className="light-color bg-primary-color"
              >
                <Typography variant="button">users</Typography>
              </Button>
            </Link>
            <LoginButton />
            {/* <Link href="/3">
              <Button
                size="small"
                variant="contained"
                className="light-color bg-primary-color"
              >
                <Typography variant="button">salam</Typography>
              </Button>
            </Link> */}
            {/* <Link href="/4">
              <Button
                size="small"
                variant="contained"
                className="light-color bg-primary-color"
              >
                <Typography variant="button">salam</Typography>
              </Button>
            </Link> */}
          </div>
        </nav>
      </Container>
    </header>
  );
}
