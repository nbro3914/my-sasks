import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/tasksSlice';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        <span style={{ marginLeft: 8, textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      </label>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
}

