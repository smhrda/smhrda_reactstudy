import { useReducer, useEffect } from 'react';


function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// useAsync (API 요청을 시작하는 함수, deps(useEffect에서 사용))
//              데이터를 나중에 불러오기 위한 파라미터 skip
function useAsync(callback, deps=[], skip = false){
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    });

    const fetchData = async () => {
        dispatch({type:'LOADING'});
        try{
            const data = await callback();
            dispatch({type: 'SUCCESS', data});
        }catch(e){
            dispatch({type:'ERROR', error: e});
        }
    };
    
    useEffect(()=>{
        if(skip) return; // skip이 true라면 아무런 작업도 하지 않도록 설정
        fetchData();
        // eslint 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, deps);

    // fetchData 반환 -> 데이터 리로딩 가능
    return [state, fetchData];
}

export default useAsync;