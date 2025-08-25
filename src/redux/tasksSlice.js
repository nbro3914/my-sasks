import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, title: 'going shopping after school', completed: false },
    { id: 2, title: 'Daily coding training ', completed: true },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), title: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => state.filter(t => t.id !== action.payload),
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

