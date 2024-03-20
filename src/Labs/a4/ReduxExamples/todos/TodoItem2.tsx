import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { TodoType } from "../../../store";

function TodoItem2({ todo }: { todo: TodoType })
  {
    const dispatch = useDispatch();

    return (
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className="me-auto">{todo.title}</span>
        <button className="btn btn-primary me-2" onClick={() => dispatch(setTodo(todo))}> Edit </button>
        <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      </li>
    );
  }

  export default TodoItem2;