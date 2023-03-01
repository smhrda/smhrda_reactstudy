/* 액션 타입 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 생성 함수 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* thunk 함수 만들기 */
// thunk 함수 : dispatch와 getState를 파라미터로 받는 함수를 만들어주는 함수
export const increaseAsync = () => (dispatch) => {
    // getState를 안쓰면 안받아와도 됨
    setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(decrease()), 1000);
};

// 초깃값
const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
