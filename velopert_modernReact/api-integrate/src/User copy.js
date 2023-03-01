// Context 적용 전 User.js

import React from "react";
import axios from "axios";
// import useAsync from "./useAsync";
import { useAsync } from 'react-async';

// id 값을 props 로 받아와서 API에 요청
// - 커스텀 훅에서는 id
// - useAsync를 사용할 때는 객체 형태로 {id}
async function getUser({id}) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  /* // useAsync.js 커스텀 훅을 쓰는 경우(결과물을 배열로 반환)
  const [state] = useAsync(() => getUser(id), [id]) // deps에 id => id가 바뀔 때마다 재호출
  const { loading, data: user, error } = state; // state.data 를 users 키워드로 조회
 */

  // react-async의 useAsync를 쓰는 경우(결과물을 배열로 반환)
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id
  });


  /* if (loading) return <div>Loading...</div>; */
  if (isLoading) return <div>Loading...</div>
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