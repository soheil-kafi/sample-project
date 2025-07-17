import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { BASE_URL } from "./../../api/users";
import Link from "next/link";

import AgreedDialog from "./components/dialog";
import EditForm from "./components/edit-form";

export default async function UserDetails({ id }) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const user = await response.json();
  return (
    <div className="w-full flex justify-center content-center mt-10">
      <Card
        sx={{ maxWidth: 345 }}
        className="bg-secondary-color light-color"
        elevation={10}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/User.png"
            alt="user image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="h6">{user.address}</Typography>
            <Typography variant="body2">{user.about}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="flex justify-between">
          <EditForm user={user} />
          <AgreedDialog user={user.name} id={user.id} />
        </CardActions>
      </Card>
    </div>
  );
}
