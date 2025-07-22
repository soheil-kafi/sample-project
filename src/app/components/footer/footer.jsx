import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed left-0 bottom-0 w-full">
      <Container>
        <div className="flex justify-between light-color mb-0.5">
          <div>
            <Link href="/">info</Link>
          </div>
          <div>
            <Typography>
              <a href="https://t.me/soheil_sior" target="_blank">
                Get more inspiration @soheil_sior
              </a>
            </Typography>
          </div>
          <div>
            <Typography>
              site by{" "}
              <a
                className="text-color"
                href="https://github.com/soheil-kafi"
                target="_blank"
              >
                SIOR
              </a>
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}
