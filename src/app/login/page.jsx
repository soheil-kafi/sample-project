import { Typography } from "@mui/material";
import LoginForm from "./form";

export default async function LoginPage() {
  return (
    <div className="mt-2">
      <div className="text-center light-color">
        <Typography variant="h4">this is Login Page</Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          user name and password are same as always ;)
        </Typography>
      </div>
      <LoginForm />
    </div>
  );
}
