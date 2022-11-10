import React, { useEffect } from 'react'

const User = ({ user, onRemove, onToggle }) => {
    // useEffect(함수, 의존값이 들어있는 배열(deps))
    // deps를 비워두면 컴포넌트가 처음 나타날 때만 useEffect 등록 함수 호출됨
    // deps에 특정 값을 넣으면, 지정한 값이 바뀔 때에도 호출됨


    useEffect(()=>{
        console.log('user값이 설정됨');
        console.log(user);
        return () => { //cleanup함수(deps가 비어있으면 컴포넌트 사라질 때 호출됨)
            console.log('user가 바뀌기 전...');
            console.log(user);
        };
    }, [user]); 

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick = {() => onToggle(user.id)}
                >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email}) </span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

const UserList = ({ users, onRemove, onToggle }) => {
    return (
        <div>
            {/* 동적인 배열 렌더링 -> map() 
            배열 렌더링 시에는 고유 key값 필요!*/}
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}

            {/* id값이 없을 때 key값 설정 -> index 활용
            <div>
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
            </div> */}

        </div>
    )
}

export default UserList;
