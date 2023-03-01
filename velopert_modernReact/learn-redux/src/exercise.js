import { createStore } from 'redux';
// createStore - 스토어를 만들어주는 함수

/* 리덕스에서 관리할 상태값 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: [],
};

/* 액션 타입 정의 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 */
const increase = () => ({
    type: INCREASE, // 액션 객체에는 type값 필수
});
const decrease = () => ({
    type: DECREASE,
});
const changeText = (text) => ({
    type: CHANGE_TEXT,
    text, // type 이외의 추가적인 필드 가능
});
const addToList = (item) => ({
    type: ADD_TO_LIST,
    item,
});

/* 리듀서 만들기 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state, // 리듀서는 불변성을 반드시 지켜줘야 함!
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            };
        default:
            return state; // 기존 상태 그대로 반환
    }
}

/* 스토어 만들기 */
const store = createStore(reducer);

console.log('스토어 상태 확인', store.getState());

// 스토어 안의 상태가 바뀔 때마다 호출되는 listener 함수 만들기
// 액션이 디스패치 되면 -> 상태가 바뀌고 -> listener 함수 호출됨
const listener = () => {
    const state = store.getState();
    console.log('변화한 상태 확인', state);
};

// 구독 해제
const unsubscribe = store.subscribe(listener);

/* 액션 디스패치 예시 */
// dispatch() : 스토어의 내장 함수 / 액션을 파라미터로 전달하여 발생시킴
// dispatch 호출 -> 스토어는 리듀서 함수 실행 -> 해당 액션의 로직 처리 -> 새로운 상태 반환
// => 실행 후 listener 함수로 상태 변화 확인 가능
store.dispatch(increase());
store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('Hello'));
store.dispatch(addToList({ id: 1, text: 'HI' }));
