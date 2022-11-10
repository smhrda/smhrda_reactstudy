import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

const App = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const { username, email } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopoert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active:false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active:false
        }
    ]);

    const nextId = useRef(4); //useRef()의 파라미터 -> .current의 기본값
    const onCreate = () => {
        const user = {
            id:nextId.current,
            username,
            email
        };

        //배열 변화 -> 기존 배열 복사(spread 또는 concat) 후 추가(불변성)
        //setUsers(users.concat(user)); //concat 사용(배열이름.concat(합치고싶은배열))
        setUsers([...users, user]); //spread 사용

        setInputs({ //input값 초기화
            username: '',
            email: ''
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        //id가 일치하지 않는 원소만 추출해서 새로운 배열로 만들기(불변성)
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            //배열 업데이트(map()) : id가 다르면 그대로 두고, id가 같다면 active값 반전
            users.map(user => user.id === id ? {...user, active:!user.active} : user)
        )
    }
    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );
}

export default App;