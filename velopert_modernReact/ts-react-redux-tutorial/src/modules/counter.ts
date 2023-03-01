/* typesafe-actions로 리팩토링 */
// typesafe-actions : 리덕스 사용 프로젝트에서 액션 생성 함수와 리듀서를 쉽고 깔끔하게 작성할 수 있게 해주는 라이브러리
import { createAction } from "typesafe-actions";
import { ActionType, createReducer } from "typesafe-actions";

// 액션 타입 선언   // 메서드 체이닝 사용 시 생략
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";
// const INCREASE_BY = "counter/INCREASE_BY";

// 액션 생성 함수 선언
export const increase = createAction("counter/INCREASE")(); // 반드시 함수 형태로 등록해야함 -> 끝에 ()
export const decrease = createAction("counter/DECREASE")();
export const increaseBy = createAction("counter/INCREASE_BY")<number>(); // payload 타입을 generics로 설정

// 모든 액션 객체들에 대한 타입 준비  // 메서드 체이닝 사용 시 생략
// const actions = { increase, decrease, increaseBy }; // 모든 액션 생성 함수를 actions 객체에 넣고
// type CounterAction = ActionType<typeof actions>; // ActionType을 사용해 모든 액션 객체의 타입을 준비할 수 있음

// 리덕스 모듈에서 관리할 상태의 타입 선언
type CounterState = {
  count: number;
};

// 초기상태 선언
const initialState: CounterState = {
  count: 0,
};

// 리듀서 만들기
// createReducer : 리듀서를 쉽게 만들 수 있게 해주는 함수(switch문이 아닌 객체 형태로 작성할 수 있게 함)
// Generics 로 리듀서에서 관리할 상태와 처리할 액션 객체들의 타입을 넣어야 함

/* // 1. 객체 형태로 작성하는 작성하는 경우
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }), // 액션을 참조할 필요 없으면 -> state만 받아와도 OK
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
}); */

// 2. 메서드 체이닝 방식을 통해서 구현하는 경우
// - handleAction의 첫번째 인자에 type이 아닌 액션 생성함수 자체를 넣어도 OK
// -> 액션 type을 선언하지 않아도 OK => CounterAction 준비 생략 가능, Generics 생략 가능
const counter = createReducer(initialState)
  .handleAction(increase, (state: any) => ({
    count: state.count + 1,
  }))
  .handleAction(decrease, (state: any) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state: any, action: any) => ({
    count: state.count + action.payload,
  }));

export default counter;
