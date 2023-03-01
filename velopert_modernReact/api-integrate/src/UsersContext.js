import React, { createContext, useReducer, useContext } from 'react';
import createAsyncDispatcher, { createAsyncHandler, initialAsyncState } from './asyncActionUtils';
import * as api from './api' // api 파일의 모든 함수를 임포트

// UsersContext에서 사용 할 기본 상태
const initialState = {
   users: initialAsyncState,
   user: initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// 위의 객체와 유틸 함수를 사용한 리듀서
function usersReducer(state, action) {
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// State용 Context 만들기
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// Context를 Provider로 감싸는 컴포넌트 만들기
export function UsersProvider({children}){
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return(
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    )
}

// State를 쉽게 조회하게 해주는 커스텀 훅 만들기
export function useUsersState(){
    const state = useContext(UsersStateContext);
    if(!state){
        throw new Error('Cannot find UsersProvider');
    }
    return state;
}

// Dispatch를 쉽게 사용할 수 있게 해주는 커스텀 훅 만들기
export function useUsersDispatch(){
    const dispatch = useContext(UsersDispatchContext);
    if(!dispatch){
        throw new Error('Cannot find UsersProvider');
    }
    return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser)
