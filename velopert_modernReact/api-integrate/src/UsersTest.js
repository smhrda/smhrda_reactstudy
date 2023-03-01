import React, { useState, useEffect } from "react";
import axios from "axios";

function UsersTest() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작할 때 error와 users 초기화
      setError(null);
      setUsers(null);
      // loading 상태를 true로 바꾸기
      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data); // 데이터를 response.data 에 담기
    } catch (e) {
      setError(e);
    }
    // loading 상태를 다시 false로
    setLoading(false);
  };

  useEffect(() => {
    // useEffect의 첫번재 파라미터 함수에는 async 사용 불가
    // => async를 사용하는 새로운 함수 fetchUsers를 따로 선언
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default UsersTest;