/* 미들웨어 만들기 */
// store - 리덕스 스토어 인스턴스
//         dispatch, getState, subscribe 내장 함수가 들어있음
// next - 액션을 다음 미들웨어에게 전달하는 함수
//        next(aciton) 형태로 사용
//        다음 미들웨어 없으면 -> 리듀서에 액션 전달
//        next 호출하지 않으면 -> 액션 무시 처리 ->리듀서에 전달X
// action - 현재 처리하는 액션 객체

const myLogger = (store) => (next) => (action) => {
    console.log(action); // 액션 출력
    const result = next(action); // 다음 미들웨어(또는 리듀서)에게 액션 전달

    console.log('\t', store.getState()); // 업데이트 이후의 상태 조회

    return result; // dispatch(action)의 결과물 반환(기본값: undefined)
};

export default myLogger;
