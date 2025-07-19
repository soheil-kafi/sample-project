"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Paper, Typography } from "@mui/material";
import AddUser from "./add-user";

export default function AnimatedUsers({ data }) {
  return (
    <>
      <AddUser />
      {data.map((user) => (
        <motion.div
          key={user.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.03 }}
        >
          <Paper
            elevation={5}
            className="bg-secondary-color light-color p-2 flex  justify-between"
          >
            <div className="flex items-center gap-2">
              <Typography className="text-color text-center">
                {user.id}
              </Typography>
              <Typography>{user.name}</Typography>
            </div>
            <Link href={`/users/${user.id}`}>
              <Button
                size="small"
                variant="contained"
                className="light-color bg-primary-color"
              >
                details
              </Button>
            </Link>
          </Paper>
        </motion.div>
      ))}
    </>
  );
}
