
import React from 'react';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Products from './features/products/products';
import Todos from './features/todos/Todos';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="border border-2 border-success p-3 m-3">
      <h1>Master Branch</h1>
      {/* <Products></Products>
      <Counter></Counter>
      <Todolist></Todolist> */}
      
      <Link to = "/"> Home </Link>&nbsp; &nbsp;
      <Link to = "/todos"> AllTodo </Link>&nbsp; &nbsp;
      <Link to = "/addtodo"> AddTodo </Link>&nbsp; &nbsp;
      {/* <Todos></Todos> */}
      <Outlet></Outlet>
    
    </div>
  )
}

export default App;