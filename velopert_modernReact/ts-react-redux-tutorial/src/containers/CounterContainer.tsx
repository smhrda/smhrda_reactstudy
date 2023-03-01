/* 컨테이너 컴포넌트 만들기 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
  // 상태 조회 시에는 state의 타입을 RootState로 지정
  // !) counter.ts에서 counter의 state를 any로 지정-> 수정함!(TS18046에러)
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  // 액션 디스패치 함수 만들기
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
