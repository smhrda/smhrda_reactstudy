import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
    return (
        <li
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

function Todos({ todos, onCreate, onToggle }) {
    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault(); // submit의 새로고침 방지
        onCreate(text);
        setText(''); // 초기화
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    placeholder="할 일을 입력하세요"
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default Todos;
