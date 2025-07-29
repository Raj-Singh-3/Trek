import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';

const AddTaskForm = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="Add task" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
