import React from 'react'

const Users = ({ users, onToggle }) => {
    // null checking을 통한 에러 관리
    /* if (!users) {
        return null;
    } */
    
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => onToggle(user.id)}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

// defaultProps를 통한 에러 관리
Users.defaultProps = {
    onToggle: () => {
        console.warn('onToggle is missing!')
    }
}

export default Users;