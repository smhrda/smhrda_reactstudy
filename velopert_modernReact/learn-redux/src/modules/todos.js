/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1;

export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId + 1,
        text,
        done: false,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

/* 초기 상태 선언 */
const initialState = [
    // 리듀서의 초기상태는 객체 타입이 아니어도 OK
    {
        id: 1,
        text: 'test',
        done: false,
    },
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                (todo) =>
                    todo.id === action.id // id가 일치하면
                        ? { ...todo, done: !todo.done } // done 값 반전
                        : todo // 아니라면 그대로 둠
            );
        default:
            return state;
    }
}
