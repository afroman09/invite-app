import React from "react";
import TodoList from './TodoList'

function ToDoHome(props) {
  return (
    <div>
      <div className="todo-app">
      <TodoList />
    </div>
    </div>
  );
}

export default ToDoHome;