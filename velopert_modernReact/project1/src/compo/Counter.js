import React, { useReducer } from "react";


// // reducer 함수의 구성
// function reducer(state, action) { // action : 업데이트를 위한 정보(주로 type값)
//     // 새로운 상태를 만드는 로직
//     // const nextState = ...
//     return nextState;
// }

// useReducer의 사용법
// const [state, dispatch] = useReducer(reducer, initialState);
// state - 컴포넌트에서 사용할 수 있는 상태
// dispatch - 액션을 발생시키는 함수(dispatch({type:'INCREMENT'}))
// useReducer(reducer 함수, 초기 상태)





function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}> +1 </button>
            <button onClick={onDecrease}> -1 </button>
        </div>
    )
}


export default Counter;