import React from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
  return (
    <div>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
