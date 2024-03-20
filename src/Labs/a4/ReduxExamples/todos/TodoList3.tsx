import React from "react";
import TodoForm from "./TodoForm2";
import TodoItem from "./TodoItem2";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../../../store";

function TodoList3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div>
      <h2>Todo List 3</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: TodoType) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList3;