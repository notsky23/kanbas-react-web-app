function TodoItem1({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  })
  
  {
    return (
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className="me-auto">{todo.title}</span>
        <button className="btn btn-primary me-2" onClick={() => setTodo(todo)}> Edit </button>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}> Delete </button>
      </li>
    );
  }

  export default TodoItem1;