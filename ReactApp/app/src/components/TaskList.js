import React, { useState } from 'react';
import '../styles/button.css'

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');

    const addTask = () => {
      if (taskName.trim() !== '') {
        setTasks([...tasks, taskName]);
        setTaskName('');
      }
    };

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);   
    };

    return (
      <div>
        <h1>Task List</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          placeholder="Add task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={onEnter}
        />
        <button className='add-button' onClick={addTask}>Add</button>
      </div>
    );
  }

export default TaskList;