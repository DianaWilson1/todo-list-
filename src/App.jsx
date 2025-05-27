import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateTask from "./components/CreateTask";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Edit from "./components/Edit";

import './App.css';

function App() {

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/createTask">Create Task</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/editTask" element={<Edit />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App
