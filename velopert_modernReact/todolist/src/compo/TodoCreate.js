import React, { useState } from "react";
import styled, {css} from 'styled-components';
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5; // z-index : z축의 쌓임 맥락에서의 위치 지정(클수록 위로)
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);    // translate(x,y) : 요소의 상대적 위치, 이동을 지정
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    // 플러스 모양 위치 조절
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in; // ease-in : transition(전환) 효과가 천천히 시작
    ${props => props.open && css`
        background: #fff6b6b;
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
        width: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
`;

const InsertForm = styled.form`
        background: #f8f9fa;
        padding-left: 32px;
        padding-top: 32px;
        padding-right: 32px;
        padding-bottom: 72px;

        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #dee2e6;
        width: 100%;
        outline: none;
        font-size: 18px;
        box-sizing: border-box;     // 테두리 기준으로 박스의 크기 설정
`;

function TodoCreate(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); //새로고침 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input 
                            autoFocus placeholder="할 일을 입력 후, Enter를 누르세요"
                            onChange = {onChange}
                            value= {value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default React.memo(TodoCreate); // 불필요한 리렌더링 방지