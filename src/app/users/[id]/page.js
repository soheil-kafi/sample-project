import UserDetails from "./user-details";

export default async function UserById({ params }) {
  const { id } = await params;

  return (
    <>
      <UserDetails id={id} />
    </>
  );
}
