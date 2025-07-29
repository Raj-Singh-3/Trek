import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return { tasks, addTask, removeTask };
};
