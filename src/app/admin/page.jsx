import { Typography } from "@mui/material";
import { cookies } from "next/headers";
import SetLogin from "./SetLogin";
export default async function AdminPage() {
  const cookieStore = await cookies();

  return (
    <div className="bg-secondary-color light-color rounded-lg mt-2 p-3">
      <SetLogin />
      <Typography variant="h6">
        this is the admin page , but there is not to much to do , yes now you
        access the admin rout but.... you cant do anything special , so let me
        give you some documentation about this project , so you have something
        too read and i fill this page so both of us are winners
        <br /> duration of the token is 1 hour , so you need to login again
        after that to access this important and hidden notes
        <br />i did not use .env file for these reasons : <br /> 1. i use vercel
        as my host . it free and OKAY but its not support the .env file <br />
        2. i dont need that much of security in this project . i just want to
        show i understand the JWT and reading and signing tokens . you can see
        the JWT sign key in the github repository
        <br />i write the backend and middleware of the JWT process so.... i
        guess its a positive point
        <br />
        its your token if you are interested in
        <br />
      </Typography>
      {cookieStore.get("token").value}
    </div>
  );
}
