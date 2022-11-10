import React, { useState , useRef } from 'react'

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
const nameInput = useRef();


  const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

  // 객체 업데이트 : 리액트에서는 기존 객체 직접 수정x, 새로운 객체를 만들어서 변화를 줘야 함(불변성)
  const onChange = (e) => {
    const { value, name } = e.target; //e.target에서 name, value 추출
    setInputs({
      ...inputs, //기존 input 복사
      [name]: value //name키를 가진 값을 value로 설정
    });
  };

  //초기화
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus(); //초기화 후 포커스를 input으로
  };

  return (
    <div>
      <input placeholder='이름' name='name' onChange={onChange} value={name} ref={nameInput} //선택하고 싶은 DOM에 속성으로 ref 값을 설정
      /> 
      <input placeholder='닉네임' name='nickname' onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 :</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;