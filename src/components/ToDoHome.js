import React from "react";
import { withRouter } from "react-router";
import TodoList from "./todo/TodoList";

function ToDoHome(props) {
  return (
    <div>
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default withRouter(ToDoHome);