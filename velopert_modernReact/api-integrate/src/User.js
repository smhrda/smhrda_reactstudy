import React, {useEffect} from "react";
import { useUsersState, useUsersDispatch, getUser } from "./UsersContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  useEffect(()=>{ // id 값이 바뀔 때마다 getUsers 호출
    getUser(dispatch, id);
  }, [dispatch, id])

  const {data: user, loading, error} = state.user;


  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>;
  if (!user) return null;
  return (
    <>
      <div>
        <h2>{user.username}</h2>
        <p>
          <b>Email:</b> {user.email}
        </p>
      </div>
    </>
  );
}

export default User;