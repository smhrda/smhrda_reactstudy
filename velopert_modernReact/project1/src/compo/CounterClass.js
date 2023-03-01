// 기존 함수형 Counter 컴포넌트를 클래스형으로 변환 예제
import React, { Component } from 'react';

class CounterClass extends Component{
    // bind 함수를 사용하는 경우
    /* constructor(props){ // constructor -> props를 파라미터로 받고, super(props) 호출
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);   // bind 함수 -> 해당 함수에서 가르킬 this를 직접 설정
        this.handleDecrease = this.handleDecrease.bind(this);
    } 
    // constructor 내부에서 상태 선언 및 관리하기
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
    }
    */


    // 화살표 함수로 메서드를 구현하는 경우
    state = {
        counter:0
    }

    handleIncrease = () => {
        //console.log(this);
        this.setState({
            counter:this.state.counter +1
        })
    };

    handleDecrease = () => {
        this.setState({
            counter:this.state.counter -1
        })
    };

    render(){
        return(
            <div>
            <h1>{this.state.counter}</h1> {/* render 안에서는 this.state로 조회 */}
            <button onClick={this.handleIncrease}>+1</button>
            <button onClick={this.handleDecrease}>-1</button>
          </div>
        )
    }
}


export default CounterClass;


