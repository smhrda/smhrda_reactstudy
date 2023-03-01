/* 액션 타입 만들기 */
const SET_DIFF = 'counter/SET_DIFF'; // 액션 이름에 접두사를 넣어 다른 모듈의 액션과 이름 중복 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 생성 함수 만들기 */
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* 초기 상태 선언 */
const initialState = {
    number: 0,
    diff: 1,
};

/* 리듀서 선언 */
export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff,
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
            };
        default:
            return state;
    }
}
