import React from "react";

function Hello({color, name, isSpecial}){
    return (
    <div style={{color}}>
        {/* 조건부 렌더링
            {isSpecial ?<b>*</b> : null}    <- 삼항 연산자 사용시
            {isSpecial && <b>*</b>}         <- 단축평가논리계산법(A&&B - truthy면 A / falsy면 B)*/}
        {isSpecial && <b>**</b>}
        안녕하세용~ {name} 
    </div>
    );
}

Hello.defaultProps = {
    name:"이름 없음(defaultProps)"
}

export default Hello;