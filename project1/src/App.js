import React from "react";
import Hello from './compo/Hello';
import './App.css';
import Wrapper from "./compo/Wrapper";

function App(){
    const name = "react";
    const style = {
        backgroundColor: 'black',
        color:'aqua',
        fontSize:24,
        padding:'1rem'
    }
    return(
        <>
            <Hello name="reactprops" color="red"/>
            <div style={style}>안녕ㅤ안녕{name}</div>
            {/* 주석(중괄호 필수) */}
            <div className="gray-box" //열리는 태그 내 주석 
            />
            <Hello color="pink" />
            <Wrapper>
                <Hello name="react" color="red" isSpecial={true} //조건부 렌더링
                />
                <Hello color="pink" isSpecial //props이름만 작성하고 값을 생략하면 ={true}로 간주함!
                />
            </Wrapper>
        </>
    );
}

export default App;