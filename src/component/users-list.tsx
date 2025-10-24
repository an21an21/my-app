import Link from "next/link";
//import { useEffect, useState } from "react";
const UserList = async () => {
  //   const [users, setUsers] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);
  let users = [];
  //  useEffect(() => {
  // await setTimeout(async () => {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error while fetch");
      }

      return res.json();
    })
    .then((data) => {
      // setLoading(false);
      //setUsers(data);
      debugger;
      users = data;
    })
    .catch((error) => {
      debugger;
      throw new Error("ERror");
      // setLoading(false);
      // setError(error.message);
    });
  // }, 3000);
  //}, []);
  return (
    <>
      <ul>
        {users?.map((user) => (
          <li key={user?.id}>
            <Link href={`/users/${user?.id}`}>{user?.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
