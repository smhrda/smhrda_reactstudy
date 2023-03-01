/* 프리젠테이셔널 컴포넌트 만들기 
    : 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를
      props 로만 받아와서 사용하는 컴포넌트
*/

import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = (e) => {
        // e.target.value 는 문자열 타입 -> 숫자 변환 필요
        onSetDiff(parseInt(e.target.value, 10));
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;
