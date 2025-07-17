import { BASE_URL } from "../api/users";

import AnimatedUsers from "./animated";
export default async function FetchUsers() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return (
    <ul className="grid gap-3">
      <AnimatedUsers data={data} />
    </ul>
  );
}
