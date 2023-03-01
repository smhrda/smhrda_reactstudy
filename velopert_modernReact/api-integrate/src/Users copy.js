// Context 적용 전 Users.js


import React, {useState} from "react";
import axios from "axios";
/* import useAsync from "./useAsync"; */
import { useAsync } from "react-async";
import User from "./User";

// response에서 data를 추출하여 반환하는 함수
async function getUsers(){
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
    return response.data; 
}

function Users() {
  const [userId, setUserId] = useState(null);

  /* // 커스텀 훅 useAsync를 사용하는 경우
  const [state, refetch] = useAsync(getUsers, [], true);  // skip에 true를 주고 불러오기 버튼 렌더링
  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회
 */

  // react-async의 useAsync를 사용하는 경우
  const {data:users, error, isLoading, run} = useAsync({
    deferFn: getUsers
    // 처음 렌더링 하는 시점부터 데이터를 불러오고 싶은 경우에는
    // deferFn -> PromiseFn / run -> reload
  });

  /* if (loading) return <div>Loading...</div>; */
  if(isLoading) return <div>Loading...</div>
  if (error) return <div>Error!</div>;
  if (!users) return <button onClick={run}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li 
          key={user.id}
          onClick={()=>setUserId(user.id)}
          style={{cursor:'pointer'}}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {/* <button onClick={refetch}>다시 불러오기</button> */}
      <button onClick={run}>다시 불러오기</button>
      {userId && <User id={userId}/>}
    </>
  );
}

export default Users;