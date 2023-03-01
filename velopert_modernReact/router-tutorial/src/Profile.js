import React from 'react'

const profileData = {
    velopert: {
        name: '이하진',
        description: 'FullStack Engineer'
    },
    yuri:{
        name: '권유리',
        description: '숲 유치원 진달래반 선생님'
    }
};


const Profile = ({match}) => {
    // match 안의 params 값을 참조
    const {username} = match.params;
    const profile = profileData[username];
    if(!profile){
        return <div>존재하지 않는 유저입니다.</div>
    }

  return (
    <div>
        <h3>
            {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
    </div>
  )
}

export default Profile;