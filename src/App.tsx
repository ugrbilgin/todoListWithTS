import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todos from './components/TodoContainer'
import TodoForm from './components/CreateTodo'
function App() {

  return (
    <div className="App">
      <TodoForm />
      <Todos/>
    </div>
  );
}

export default App
