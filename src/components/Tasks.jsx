import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Tasks.css';




function Tasks() {
  const [state, setState] = useState([]);

  const fetchTodos = async () => {
    axios.get('http://localhost:3000/todo/all')
      .then(response => {
        setState(response.data.todos);
      })
      .catch(error => {
        console.error(error);
      });

  }

  useEffect(() => {
    // Fetch todo

    fetchTodos();
  }, []);

  const deleteTodo = async (id) => {
    axios.delete(`http://localhost:3000/todo/${id}`)
      .then(response => {
        fetchTodos()
      })
      .catch(error => {
        console.error(error);
      });

  }

  console.log(state);
  return (
    <>
      <h1>Your current tasks:</h1>
      {/* loop/map over the todos */}
      <ul>
        {state.map(todo => {
          return (
            <li>
               <div style={{display: 'flex', alignItems: 'baseline'}}>
                {todo.title}
                <Link to="/editTask">
                <button>Edit</button>
                </Link>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
              </div>

            </li>
          )
        })}
      </ul>
    </>
  )
}
export default Tasks;
