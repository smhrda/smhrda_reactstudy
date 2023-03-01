import React, { useCallback, useMemo, useRef, useState } from "react";
import CreateUser from "./compo/CreateUser";
import UserList from "./compo/UserList";


// 활성 사용자 수를 세는 함수
const countActiveUsers = (users) => {
  console.log('활성 사용자 수 세기');
  return users.filter(user => user.active).length; // user가 active인 경우 세기
}

function App() {

  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });

  const {username, email} = inputs;
  
/*   const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  } */


// useCallback을 사용하여 props가 바뀌지 앟았으면 렌더링하지 않고 결과물 재사용 -> 최적화
const onChange = useCallback((e)=> {
  const {name, value} = e.target;
  setInputs({
    ...inputs,
    [name] : value
  });
}, [inputs]) // useCallback사용 시에는 반드시 deps 배열 안에 props(함수에서 사용하는 값이나 함수)를 포함해야 함


  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'test1',
      email: 'test1@gamil.com',
      active:true
    }, {
      id: 2,
      username: 'test2',
      email: 'test2@gamil.com',
      active:false
    }, {
      id: 3,
      username: 'test3',
      email: 'test3@gamil.com',
      active:false
    }
  ])

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    // 배열에 항목을 추가하는 로직
    const user = {
      id:nextId.current,
      username,
      email
    };
    //setUsers([...users, user])  //spread 사용 시
    setUsers(users.concat(user))  //concat 사용 시


    // 초기화 후 아이디 값 +1
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1;
  }, [username, email]);

  // 삭제하는 함수
  const onRemove = useCallback((id) => {
    // id 가 일치하지 않는 원소만 filter해서 새로운 배열로 재생성
    setUsers(users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active:!user.active} : user))
  }, []);



  
  //const count = countActiveUsers(users); // input 값이 바뀔 때마다 리렌더링 되므로 비효율적
  const count = useMemo(() => countActiveUsers(users), [users]) // deps 배열 내용이 바뀌지 않으면 이전 값 재사용 -> 효율 향상



  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
