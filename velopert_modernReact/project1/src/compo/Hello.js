// 클래스형 컴포넌트 사용 예제

// 클래스형 변환 전 기존 함수형 컨포넌트
/* import React from 'react'

const Hello = ({color, name, isSpecial}) => {
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            Hello, {name}
        </div>
    )
}

Hello.defaultProps = {
    name:'이름없음'
}
*/


// 클래스형 컴포넌트로 변환
import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name:'이름없음'
    }
    render() {   // render() 메서드 필수!
        const { color, name, isSpecial } = this.props; // props 조회 시 this.props 조회
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                Hello, {name}
            </div>
        )
    }
}







export default Hello;