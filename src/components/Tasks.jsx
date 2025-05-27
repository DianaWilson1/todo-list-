import { useEffect, useState } from 'react';
import axios from 'axios';
import './Tasks.css';




function Tasks() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todo
    const fetchTodos = async () => {
      axios.get('http://localhost:3000/todo/all')
        .then(response => {
          setTodos(response.data.todos);
        })
        .catch(error => {
          console.error(error);
        });

    }
    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <>
      <h1>Your current tasks</h1>
      {/* loop/map over the todos */}
      <ul>
        {todos.map(todo => {
          return (
            <li>
              <a href={`/todo/${todo._id}`}>
                {todo.title}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default Tasks;
