import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

// 한 종류의 값만 조회하고 싶으면 반드시 객체를 반환할 필요는 없음
function TodosContainer() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
