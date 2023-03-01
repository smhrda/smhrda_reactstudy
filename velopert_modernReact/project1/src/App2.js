import React, { useCallback, useMemo, useReducer, useRef } from "react";
import CreateUser from "./compo/CreateUser";
import UserList from "./compo/UserList";
import useInputs from "./hooks/useInputs";
import produce from 'immer'; // immer 라이브러리에서 produce 함수 임포트


// 활성 사용자 수를 세는 함수
const countActiveUsers = (users) => {
    console.log('활성 사용자 수 세기');
    return users.filter(user => user.active).length; // user가 active인 경우 세기
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'test1',
            email: 'test1@gamil.com',
            active: true
        }, {
            id: 2,
            username: 'test2',
            email: 'test2@gamil.com',
            active: false
        }, {
            id: 3,
            username: 'test3',
            email: 'test3@gamil.com',
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        /* case 'CHANGE_INPUT': // inputs 상태를 업데이트 하는 액션 객체 CAHNGE_INPUT
            return {
                ...state, // reducer함수에서도 불변성을 지키기 위해 spread 사용
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }; */
        case 'CREATE_USER':
            return {
                /* inputs: initialState.inputs, */
                /*  users: state.users.concat(action.user) */
        
            }
        case 'TOGGLE_USER':
            /* return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user)
            } */
            // immer 사용하기
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            })
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        default:
            return state;
    }
}

// Context API 사용하기 : React.createContext(기본값)
export const UserDispatch = React.createContext(null);
// ==> import { UserDispatch } from './App2'와 같이 불러와서 사용 가능!





function App() {

    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    })

    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;

    /*     const onChange = useCallback(e => {
            const { name, value } = e.target;
            dispatch({
                type: 'CHANGE_INPUT',
                name,
                value
            });
        }, []); */

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset(); // reset(): 항목 추가 후 input값 초기화
        nextId.current += 1;
    }, [username, email, reset])

    /*     const onToggle = useCallback(id => {
            dispatch({
                type: 'TOGGLE_USER',
                id
            });
        }, []);
    
        const onRemove = useCallback(id => {
            dispatch({
                type: 'REMOVE_USER',
                id
            });
        }, []) */








    // 활성 사용자 수 구하기
    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        // Context 안의 Provider 컴포넌트를 통해 Context 값 설정(value 설정을 통해)
        // ==> Provider로 감싸진 컴포넌트 중 어디서든지 Context 값 조회 및 사용 가능
        <UserDispatch.Provider value={dispatch}>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} /* onToggle={onToggle} onRemove={onRemove} */ />
            <div>활성 사용자 수 : {count} </div>
        </UserDispatch.Provider>
    );
}

export default App;
