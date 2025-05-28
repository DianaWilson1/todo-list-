import { useEffect, useState } from 'react';
import axios from 'axios';
import './CreateTask.css';
import { data } from 'react-router-dom';
function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const createTask = (todo) => {
    axios.post('http://localhost:3000/todo', todo)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="main1">
        create task there
        <input placeholder="Name of Task" onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <h4>Does task completed?</h4>
        <div className='status'>
          <button onClick={e => setIsComplete(true)} >Yes</button>
          <button onClick={e => setIsComplete(false)}> No </button>
        </div>
        <button onClick={e => createTask({ title, description, isComplete })}>Create Task</button>

      </div>
    </>

  )
}
export default CreateTask;
