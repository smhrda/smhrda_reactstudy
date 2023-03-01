import React, { CSSProperties } from "react";
import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onRemove, onToggle }: TodoItemProps) {
  const textStyle: CSSProperties = {
    // CSSProperties : style 객체의 타입
    textDecoration: todo.done ? "line-through" : "none",
  };
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: "red",
  };
  const handleToggle = () => {
    onToggle(todo.id);
  };
  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (삭제)
      </span>
    </li>
  );
}

export default TodoItem;
