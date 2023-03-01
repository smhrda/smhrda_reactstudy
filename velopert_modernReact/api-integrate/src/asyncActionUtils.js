// 파라미터로 액션의 타입과 Promise를 만드는 함수를 받아오는 함수
export default function createAsyncDispatcher(type, promiseFn) {
    // 성공, 실패에 대한 액션 타입 문자열 준비
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    async function actionHandler(dispatch, ...rest) {
        dispatch({ type }); // 요청 시작
        try {
            const data = await promiseFn(...rest);
            dispatch({
                type: SUCCESS,
                data
            }); // 성공
        } catch (e) {
            dispatch({
                type: ERROR,
                error: e
            }); // 실패
        }
    }
    return actionHandler;
}

export const initialAsyncState = {
    loading: false,
    data: null,
    error: null
}

// 로딩중일 때
const loadingState = {
    loading: true,
    data: null,
    error: null
};

// 성공했을 때
const success = data => ({
    loading: false,
    data,
    error: null
});

// 실패했을 때
const error = error => ({
    loading: false,
    data: null,
    error: error
});

// 액션을 처리하는 리듀서
// type - 액션 타입 / key - 리듀서에서 사용할 필드 이름(user, users 등)
export function createAsyncHandler(type, key) {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    function handler(state, action) {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: success(action.data)
                };
            case ERROR:
                return {
                    ...state,
                    [key]: error(action.error)
                };
            default:
                return state;
        }
    }
    return handler;
}