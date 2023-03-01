/* Promise에 기반한 Thunk를 만들어주는 함수 */
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (param) => async (dispatch) => {
        // 요청 시작
        dispatch({ type, param });
        try {
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload }); // 성공
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true }); // 실패
        }
    };
};

/* 리듀서에서 사용하는 유틸 함수 만들기 */
export const reducerUtils = {
    // 초기 상태
    // 초기 data 값은 null이지만 바꿀 수 있음
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),
    // 로딩중 상태
    // prevState 초기 값은 null 이지만,
    // 따로 값을 지정하면 null로 바꾸지 않고 다른 값을 유지시킬 수 있음
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    // 성공 상태
    success: (payload) => ({
        loading: false,
        data: payload,
        error: null,
    }),
    // 실패 상태
    error: (error) => ({
        loading: false,
        data: null,
        error: error,
    }),
};

/* 비동기 액션들을 처리하는 리듀서 만들기 */
// type - 액션의 타입, key - 상태의 key값   // 예) (posts, post)
// keepData -> true라면 로딩할 때에도 데이터를 유지하도록 함
export const handleAsyncActions = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(
                        keepData ? state[key].data : null
                    ),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.error),
                };
            default:
                return state;
        }
    };
};

/* 특정 id를 처리하는 Thunk 생성 함수 */
const defaultIdSelector = (param) => param; // 기본값으로 파라미터를 그대로 id로 사용
export const createPromiseThunkById = (
    type,
    promiseCreator,
    // 파라미터에서 id를 어떻게 선택할 지 정의 -> 파라미터를 그대로 id로 사용
    idSelector = defaultIdSelector
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (param) => async (dispatch) => {
        const id = idSelector(param);
        dispatch({ type, meta: id }); // 비동기 작업 관련 액션이 어떤 id를 가르키는지 action.meta에 넣어줌
        try {
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload, meta: id });
        } catch (e) {
            dispatch({ type: ERROR, error: true, payload: e, meta: id });
        }
    };
};

/* id별로 처리하는 유틸 함수 */
export const handleAsyncActionsById = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        const id = action.meta;
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            keepData
                                ? // state[key][id]가 만들어져 있는지 유효성 검사
                                  state[key][id] && state[key][id].data
                                : null
                        ),
                    },
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload),
                    },
                };
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload),
                    },
                };
            default:
                return state;
        }
    };
};
