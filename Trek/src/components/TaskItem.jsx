import React from 'react';
import { useTasks } from '../hooks/useTasks';

const TaskItem = ({ task, index }) => {
  const { removeTask } = useTasks();

  return (
    <li>
      {task}
      <button onClick={() => removeTask(index)}>❌</button>
    </li>
  );
};

export default TaskItem;
