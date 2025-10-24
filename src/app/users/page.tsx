import UserList from "@/component/users-list";
import { Suspense } from "react";
const UserListPage = () => {
  //   if (loading) return <> Loading users.... </>;

  //   if (error) return <>{error}</>;

  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <UserList />
      </Suspense>
    </>
  );
};
export default UserListPage;
