import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  if (!tasks || tasks.length === 0) return <p>No tasks yet.</p>;
  return (
    <div>
      {tasks.map((t) => <TaskItem key={t.id} task={t} />)}
    </div>
  );
}

