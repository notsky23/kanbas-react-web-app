function TodoForm1({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
  })
  
  {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span className="me-auto">
            <input
                value={todo.title}
                onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }
            />
        </span>
        <button className="btn btn-warning me-2" onClick={() => updateTodo(todo)}> Update </button>
        <button className="btn btn-success" onClick={() => addTodo(todo)}> Add </button>
      </li>
    );
  }

  export default TodoForm1;