import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import TodoInsert from "../components/TodoInsert";
import { RootState } from "../modules";
import { addTodo, removeTodo, toggleTodo } from "../modules/todos";

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    /* HTML 코드를 사용하기 위해서 확장자를 tsx로 지정해야 함! (.ts로 하면 여기서부터 오류 발생)*/
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default TodoApp;
