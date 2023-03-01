import React from 'react'

// 새로운 유저를 등록하는 함수
const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
        <div>
            <input name='username' placeholder='계정명' onChange={onChange} value={username}></input>
            <input name='email' placeholder='이메일' onChange={onChange} value={email}></input>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

// React.memo : 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링이 진행되도록 설정
//              - 렌더링 결과를 메모이징 -> 불필요한 렌더링을 건너뜀
export default React.memo(CreateUser);