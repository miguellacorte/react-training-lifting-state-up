import { useState } from 'react'
import './App.css'
import Summary from './components/Summary';
import Task from './components/Task';
import ToDoList from './components/ToDoList';


function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}
export default App;