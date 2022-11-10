import React, { useState } from 'react'

const InputSample = () => {
    const [text, setText] = useState('');

    const onChange = (event) => {
        setText(event.target.value); //e.target : 이벤트가 발생한 DOM
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {text} </b>
            </div>
        </div>
    );
}

export default InputSample;