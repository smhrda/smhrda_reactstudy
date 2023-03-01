import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE' : 
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}

/* 각각 Context 를 만들어 다른 컴포넌트에서 사용 */
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

/* useContext를 사용하는 커스텀 Hook(컴포넌트에서 useContext를 바로 사용하는 대신 -> 사용성 향상) */
export function useTodoState(){
    const context = useContext(TodoStateContext);
    // 에러 처리
    if(!context){
        throw new Error('Cannnot find TodoProvider');
    }
    return context;
}
export function useTodoDispatch(){
    const context =  useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannnot find TodoProvider');
    }
    return context;
}
export function useTodoNextId(){
    const context =  useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannnot find TodoProvider');
    }
    return context;
}