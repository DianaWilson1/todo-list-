import { useEffect, useState } from 'react';
import axios from 'axios';
import './CreateTask.css';
import { useNavigate, useParams } from 'react-router-dom';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const editTodo = async (data) => {
    axios.put(`http://localhost:3000/todo/${id}`, data)
      .then(response => {
        navigate(`/tasks`)
      })
      .catch(error => {
        console.error(error);
      });

  }

  const fetchTodo = async () => {
    axios.get(`http://localhost:3000/todo/${id}`
    )
      .then(response => {
        setTitle(response.data.todo.title)
        setDescription(response.data.todo.description)
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <div className="main1">
        <h2> Edit task here :</h2>
        <input placeholder="Name of Task" onChange={e => setTitle(e.target.value)} value={title} />
        <input placeholder="Description" onChange={e => setDescription(e.target.value)} value={description} />
        <h4>Does task completed?</h4>
        <div className='status'>
          <button onClick={e => setIsComplete(true)} >Yes</button>
          <button onClick={e => setIsComplete(false)}> No </button>
        </div>
        <button onClick={e => editTodo({ title, description, isComplete })}>Save</button>

      </div>
    </>

  )
}
export default CreateTask;
