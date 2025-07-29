import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} />
      ))}
    </ul>
  );
};

export default TaskList;
