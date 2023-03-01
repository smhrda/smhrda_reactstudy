/* 컨테이너 컴포넌트 만들기
    : 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트
      / HTML 태그를 사용하지 않고, 다른 프리젠테이셔널 컴포넌트를 불러와서 사용
*/

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    // useSelector - 리덕스 스토어의 상태 조회
    // state - store.getState()의 결과물과 동일
    const number = useSelector((state) => state.counter.number);
    const diff = useSelector((state) => state.counter.diff);

    // useDispatch - 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해줌
    const dispatch = useDispatch();

    /* 각 액션을 디스패치하는 함수 만들기 */
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter
            // 상태와
            number={number}
            diff={diff}
            // 액션을 디스패치하는 함수들을 props로 넣어줌
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;
