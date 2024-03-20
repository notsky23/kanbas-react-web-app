import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../store";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div className="container">
      <h1>Assignment 3</h1> <br />
      <JavaScript /> <br />
      <PathParameters /> <br />
      <Classes /> <br />
      <Styles /> <br />
      <ConditionalOutput /> <br />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight> <br /><br />
      <Add a={3} b={4}/> <br />
      <TodoItem/> <br />
      <TodoList/> <br /> <br />
      <h2>Todo Redux (A4: Todo List 3)</h2>
      <ul className="list-group">
        {todos.map((todo:TodoType) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignment3;