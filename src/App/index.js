/*import logo from './logo.svg';
 import './App.css'; */
import React from 'react';
import { TaskProvider } from '../TaskContext/index.js';
import { AppUI } from './AppUI.js';


function App() {
  
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
