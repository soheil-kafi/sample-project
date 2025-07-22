import { Typography } from "@mui/material";
export default function Main() {
  return (
    <div className="bg-secondary-color light-color rounded-lg mt-2 p-4">
      <Typography className="text-center text-color !mb-1" variant="h3">
        Welcome !
      </Typography>
      <Typography variant="body1">
        so im soheil kafi and this is sample project to show my skills
        <br />i used Next.js 15 and app router to get the most benefit of
        powerful server side rendering and typescript for strong types and less
        errors
        <br />i use tailwind css and material UI for base UI design
        <br />
        for the host i use vercel . its the recommended Host by creator of Next
        js . because vercel is company behind next ;)
        <br />
        <a
          href="https://github.com/soheil-kafi/sample-project"
          className="text-color"
          target="_blank"
        >
          the github repository
        </a>
        <br />
        so this was my sample project . also i have resume that i create with
        React and i share all my skills
        <a
          href="https://soheil-kafi.github.io/resume/"
          className="text-color"
          target="_blank"
        >
          {" "}
          my Resume
        </a>
      </Typography>
      <Typography className="text-center text-color !my-1" variant="h5">
        User route
      </Typography>
      <Typography variant="body1">
        in the user route i use the powerful server side data fetching Feature
        of next 15. also i use axios for easer api calling , I could use react
        query but it would only make my job harder. also some packages for
        smooth animations and MUI for modal
        <br />
        for the API i use free <a href="https://mockapi.io/">mock api</a> its
        support all actions so its very good
      </Typography>
      <Typography className="text-center text-color !my-1" variant="h5">
        login route
      </Typography>
      <Typography variant="body1">
        in the Login route i create a simple login process with jose for sign
        and read jsonwebtoken and set it on cookie
        <br />
        for the backend of this process i use the Route Handlers feature of
        next15 and middleware . also help of chat GPT;)
        <br />
        also i use Zustand to set user login in the global state so i can access
        it everywhere every time
      </Typography>
    </div>
  );
}
