import React, { useState } from 'react';
import './App.css'; 

function APP() {
  const [task1, utask1] = useState('');
  const [task, utask] = useState([]);
  const [counter, setCounter] = useState(1); // Initialize the counter for task IDs

  function updatet() {
    const x = task1.trim(); // Trim the input value to remove leading/trailing spaces
    if (!x) return; // Prevent adding empty tasks

    const newTask = {
      id: counter,
      task: x
    };

    // Update the state
    utask([...task, newTask]);
    setCounter(counter + 1); // Increment the counter by 1 for the next task ID
    utask1(''); // Clear the text field
  }

  function delete1(taskId) {
    const updatedTasks = task.filter((item) => item.id !== taskId);
    utask(updatedTasks);
  }

  return (
    <>
    <div className='bod'>
      <p>change backgroundcolor here</p>
      <input type='color' id='col' onChange={()=>{
          document.body.style.backgroundColor=document.getElementById('col').value
      }}/>
      <div className='input-container'>
        <h1>Task Manager</h1>
        <input type='text' id='text' value={task1} onChange={(e) => utask1(e.target.value)} />
        <button onClick={updatet}>Add</button>
      </div>

      <div className='task-list'>
        <ul>
          {task.map((h) => (
            <li key={h.id}>
              <p>{h.task}</p>
              <button onClick={() => delete1(h.id)}> ❌</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}

export default APP;
