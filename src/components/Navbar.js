import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: 12, background: '#333' }}>
      <Link to="/" style={{ color: '#fff', marginRight: 12 }}>Home</Link>
      <Link to="/add" style={{ color: '#fff', marginRight: 12 }}>Add Task</Link>
      <Link to="/about" style={{ color: '#fff' }}>About</Link>
    </nav>
  );
}

