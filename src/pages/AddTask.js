import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../redux/tasksSlice';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask(title.trim()));
    setTitle('');
    navigate('/');
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Add Task</h2>
      <form onSubmit={onSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
        <button type="submit" style={{ marginLeft: 8 }}>Add</button>
      </form>
    </div>
  );
}

