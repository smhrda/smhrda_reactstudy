import React, { useContext, useEffect } from 'react'
import { UserDispatch } from '../App2'

const User = React.memo(function User({ user, onRemove, onToggle }){
    /* useEffect(() => {
        console.log(user);
        
    }) // useEffect(함수, 의존값 배열) // 배열이 비면 -> 컴포넌트가 처음 나타날 때에만 함수 호출 / 사라질 때 cleanup 호출

 */

    // onRemove, onToggle 함수 대신 Context 사용
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} 
                /* onClick={() => onToggle(user.id)} */
                onClick = {()=>{dispatch({type:'TOGGLE_USER', id:user.id})}}>
                {user.username}</b> 
                <span>({user.email})</span>
            <button /* onClick={() => onRemove(user.id)} */
                       onClick={()=>{dispatch({type:'REMOVE_USER', id: user.id})}}>삭제</button>
        </div>
    )
}
)

function UserList({ users /* , onRemove, onToggle  */}){
    return (
        <div>
            {users.map(user => (  
                <User user={user} key={user.id} /* onRemove={onRemove} onToggle={onToggle} */></User>
            ))}
        </div>
    )
}

export default React.memo(UserList);