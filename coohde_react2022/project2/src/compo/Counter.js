import React, {useState} from 'react'

const Counter = () => {
    const [number, setNumer] = useState(0); //초깃값 0
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1]
    const onIncrease = () => {    //prevNumber, prevState
        setNumer(prevNumber => prevNumber + 1); // => setNumber(number + 1)
    }
    const onDecrease = () => {
        setNumer(prevNumber => prevNumber -1);
    }



return (
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
)
}

export default Counter;