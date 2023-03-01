// /* typesafe-actions로 리팩토링 하기 전(참고) */

// // 액션 타입 선언
// // as const -> 액션 객체를 만들 때 action.type 값을 추론하는 과정에서
// //             string으로 추론되지 않고 'counter/INCREASE'와 같이 실제 문자열 값으로 추론되도록 함
// const INCREASE = "counter/INCREASE" as const;
// const DECREASE = "counter/DECREASE" as const;
// const INCREASE_BY = "counter/INCREASE_BY" as const;

// // 액션 생성 함수 선언
// export const increase = () => ({
//   type: INCREASE,
// });
// export const decrease = () => ({
//   type: DECREASE,
// });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   // 액션에 부가적으로 필요한 값을 payload라는 이름으로 통일
//   // => 액션 구조 일반화 -> 추후 액션 관련 라이브러리 사용 원활
//   payload: diff,
// });

// // 모든 액션 객체들에 대한 타입 준비
// // ReturnType<typeof__> -> 특정 함수의 반환값 추론해줌
// // <- 상단의 as const를 하지 않으면 제대로 작동 X
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

// // 리덕스 모듈에서 관리할 상태의 타입 선언
// type CounterState = {
//   count: number;
// };

// // 초기상태 선언
// const initialState: CounterState = {
//   count: 0,
// };

// // 리듀서 만들기
// function counter(
//   state: CounterState = initialState,
//   action: CounterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }
// export default counter;
export {};
