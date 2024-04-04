import React, { useState, useEffect } from "react";
import axios from "axios";

interface ErrorMessages {
  [key: number]: string;
}

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  // const API_BASE = "https://kanbas-node-server-app-vvg4.onrender.com/a5/todos";
  const API_BASE1 = process.env.REACT_APP_API_BASE?.replace(/\/+$/, "");
  const API_BASE = `${API_BASE1}/a5/todos`;

  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  const [todo1, setTodo1] = useState({id: 1});
  const [todo2, setTodo2] = useState({id: 1});
  const [todo3, setTodo3] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todo4, setTodo4] = useState({
    id: 1,
    description: "Create a NodeJS server with ExpressJS",
  });
  const [todo5, setTodo5] = useState({
    id: 1,
    completed: false,
  });
  const [todo6, setTodo6] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  
  const [todos, setTodos] = useState<any[]>([]);
  const fetchTodos = async () => {
    // const response = await axios.get(API);
    const response = await axios.get(`${API_BASE}`);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  // Create
  const createTodo = async () => {
    // const response = await axios.get(`${API}/create`);
    const response = await axios.get(`${API_BASE}/create`);
    setTodos(response.data)
  }
  const postTodo = async () => {
    // const response = await axios.post(API, todo6);
    const response = await axios.post(API_BASE, todo6);
    setTodos([...todos, response.data]);
  }

  // Delete
  const removeTodo = async (todo: any) => {
    // const response = await axios.get(`${API}/${todo.id}/delete`);
    const response = await axios.get(`${API_BASE}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const deleteTodo = async (todo: any) => {
    try {
      // const response = await axios.delete(`${API}/${todo.id}`);
      const response = await axios.delete(`${API_BASE}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessages((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[todo.id];
        return updatedErrors;
      });
    } catch (error: any) {
      console.log(error);
      // setErrorMessage(error.response.data.message);
      setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [todo.id]: error.response?.data?.message || "An error occurred"
    }));
    }
  };

  // Retrieve
  const fetchTodoById = async (id: any) => {
    // const response = await axios.get(`${API}/${id}`);
    const response = await axios.get(`${API_BASE}/${id}`);

    // setTodos(response.data);
    setTodo6({
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      due: response.data.due,
      completed: response.data.completed,
    });
  }

  // Update
  // const updateTitle = async () => {
  //   const response = await axios.get(`${API}/${todo6.id}/title/${todo6.title}`);
  //   setTodos(response.data);
  // }
  const updateTodo = async () => {
    // const response = await axios.put(`${API}/${todo6.id}`, todo6);
    const response = await axios.put(`${API_BASE}/${todo6.id}`, todo6);
    setTodos(todos.map((t) => (t.id === todo6.id ? todo6 : t)));
  };
  // const updateTodo = async () => {
  //   try {
  //     await axios.get(`${API}/${todo6.id}/title/${todo6.title}`);
  //     await axios.get(`${API}/${todo6.id}/description/${todo6.description}`);
  //     await axios.get(`${API}/${todo6.id}/due/${todo6.due}`);
  //     await axios.get(`${API}/${todo6.id}/completed/${todo6.completed}`);

  //     // Optionally fetch all todos again to refresh the list
  //     fetchTodos();
  //   } catch (error) {
  //     console.error("Error updating todo:", error);
  //   }
  // }

  return (
    <div>
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      {/* <a href={API} className="btn btn-primary mb-3"> */}
      <a href={API_BASE} className="btn btn-primary mb-3">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="d-flex mb-3">
        <input
          className="form-control me-3"
          value={todo1.id}
          onChange={(e) => setTodo1({ ...todo1, id: parseInt(e.target.value, 10) || 0 })}
        />
        {/* <a href={`${API}/${todo1.id}`} className="btn btn-primary text-nowrap me-3"> */}
        <a href={`${API_BASE}/${todo1.id}`} className="btn btn-primary text-nowrap me-3">
          Get Todo by ID
        </a>
      </div>
      
      <h4>Filtering Array Items</h4>
      {/* <a href={`${API}?completed=true`} className="btn btn-primary me-3 mb-3"> */}
      <a href={`${API_BASE}?completed=true`} className="btn btn-primary me-3 mb-3">
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      {/* <a href={`${API}/create`} className="btn btn-primary me-3 mb-3"> */}
      <a href={`${API_BASE}/create`} className="btn btn-primary me-3 mb-3">
        Create Todo
      </a>

      <h3>Deleting from an Array</h3>
      <div className="d-flex mb-3">
        <input
          className="form-control me-3"
          type="number"
          onChange={(e) => setTodo2({ ...todo2, id: Number(e.target.value) })}
          value={todo2.id}
        />
        {/* <a className="btn btn-primary text-nowrap me-3" href={`${API}/${todo2.id}/delete`}> */}
        <a className="btn btn-primary text-nowrap me-3" href={`${API_BASE}/${todo2.id}/delete`}>
          Delete Todo with ID = {todo2.id}
        </a>
      </div>

      <h3>Updating an Item in an Array</h3>
      <div className="d-flex mb-3">
        <input
          className="form-control me-3"
          type="number"
          onChange={(e) => setTodo3({ ...todo3, id: Number(e.target.value) })}
          value={todo3.id}
        />
        <input
          className="form-control me-3"
          type="text"
          onChange={(e) => setTodo3({ ...todo3, title: e.target.value })}
          value={todo3.title}
        />
        {/* <a className="btn btn-primary text-nowrap me-3" href={`${API}/${todo3.id}/title/${todo3.title}`}> */}
        <a className="btn btn-primary text-nowrap me-3" href={`${API_BASE}/${todo3.id}/title/${todo3.title}`}>
          Update Title to {todo3.title}
        </a>
      </div>

      <div className="d-flex mb-3">
        <input
          className="form-control me-3"
          type="number"
          onChange={(e) => setTodo4({ ...todo4, id: Number(e.target.value) })}
          value={todo4.id}
        />
        <input
          className="form-control me-3"
          type="text"
          onChange={(e) => setTodo4({ ...todo4, description: e.target.value })}
          value={todo4.description}
        />
        <a className="btn btn-primary text-nowrap me-3" href={`${API_BASE}/${todo4.id}/description/${todo4.description}`}>
          Update Description
        </a>
      </div>

      <div className="d-flex mb-3">
        <input
          className="form-control me-5"
          type="number"
          onChange={(e) => setTodo5({ ...todo5, id: Number(e.target.value) })}
          value={todo5.id}
        />
        <input
          id="completedCB"
          className="form-check-input me-3"
          type="checkbox"
          onChange={(e) => setTodo5({ ...todo5, completed: e.target.checked })}
        />
        <label
          className="form-check-label me-5" htmlFor="completedCB">
            Completed?
        </label>
        <a className="btn btn-primary text-nowrap me-3" href={`${API_BASE}/${todo5.id}/completed/${todo5.completed}`}>
          Update Completed
        </a>
      </div>

      <div className="p-2">
        <h4 className="my-3">Fetching Arrays with Axios</h4>
        <div className="border mb-3 p-2">
          <div className="border rounded mb-3">
            <div className="d-flex align-items-center m-3">
              <label
                className="form-label col-1 text-nowrap me-5" htmlFor="editArraysID">
                  ID Number:
              </label>
              <input
                id="editArraysID"
                className="form-control"
                type="number"
                onChange={(e) => setTodo6({ ...todo6, id: Number(e.target.value) })}
                placeholder={String(todo6.id)}
                readOnly
              />
            </div>
            <div className="d-flex align-items-center m-3">
              <label
                className="form-label col-1 text-nowrap me-5" htmlFor="editArraysTitle">
                  Title: 
              </label>
              <input
                id="editArraysTitle"
                className="form-control"
                type="text"
                onChange={(e) => setTodo6({ ...todo6, title: e.target.value })}
                value={todo6.title}
              />
            </div>
            <div className="d-flex align-items-center m-3">
              <label
                className="form-label col-1 text-nowrap me-5" htmlFor="editArraysDescription">
                  Description: 
              </label>
              <textarea
                id="editArraysDescription"
                className="form-control"
                onChange={(e) => setTodo6({ ...todo6, description: e.target.value })}
                value={todo6.description}
              />
            </div>
            <div className="d-flex align-items-center m-3">
              <label
                className="form-label col-1 text-nowrap me-5" htmlFor="editArraysDue">
                  Due Date: 
              </label>
              <input
                id="editArraysDue"
                className="form-control"
                type="date"
                onChange={(e) => setTodo6({ ...todo6, due: e.target.value })}
                value={todo6.due}
              />
            </div>
            <div className="d-flex align-items-center m-3">
              <label
                className="form-check-label text-nowrap col-1 me-5" htmlFor="editArraysCompleted">
                  Completed?: 
              </label>
              <input
                id="editArraysCompleted"
                className="form-check-input"
                type="checkbox"
                onChange={(e) => setTodo6({ ...todo6, completed: e.target.checked })}
                checked={todo6.completed}
              />
            </div>
          </div>
          
          <button className="list-group-item list-group-item-warning list-group-item-action text-center rounded mb-2" onClick={postTodo} >
                + Post Todo
          </button>
          <button className="list-group-item list-group-item-primary list-group-item-action text-center rounded mb-2" onClick={createTodo} >
              + Create Todo
          </button>
          <button className="list-group-item list-group-item-success list-group-item-action text-center rounded mb-2" onClick={updateTodo}>
            Update Todo
          </button>
        </div>
        
        <div className="border rounded mb-3 p-2">
          <div className="my-3">
            <button className="list-group-item list-group-item-dark list-group-item-action text-center rounded" onClick={fetchTodos} >
                Fetch Todos
            </button>
          </div>
          <ul className="list-group border rounded mb-3">
            {todos.map((todo) => (
              <li className="list-group-item" key={todo.id}>
                {/* Error Message: */}
                {errorMessages[todo.id] && (
                  <div className="alert alert-danger mb-2 mt-2">
                    {errorMessages[todo.id]}
                  </div>
                )}
                <div className="d-flex align-items-center">
                  {/* ID: {todo.id} &emsp; Title: {todo.title} &emsp; Description: {todo.description} &emsp; Completed: {String(todo.completed)} */}
                  <pre className="mr-auto me-3">{JSON.stringify(todo, null, 2)}</pre>
                  {/* <button className="btn btn-danger text-nowrap ms-auto me-2" onClick={() => removeTodo(todo)}>Remove</button> */}
                  <button className="btn btn-danger text-nowrap ms-auto me-2" onClick={() => deleteTodo(todo)}>Delete</button>
                  <button className="btn btn-warning text-nowrap" onClick={() => fetchTodoById(todo.id)}>Edit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}
  
export default WorkingWithArrays;