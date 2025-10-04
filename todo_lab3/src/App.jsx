import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from'./components/TodoItem';
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <TodoList  />
    </div>
  );
}

export default App;