import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';

export default function Home() {
  const tasks = useSelector((state) => state.tasks);
  const done = tasks.filter(t => t.completed).length;
  return (
    <div style={{ padding: 16 }}>
      <h2>My Tasks</h2>
      <p>Completed: {done} / {tasks.length}</p>
      <TaskList />
    </div>
  );
}

