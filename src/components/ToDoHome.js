import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import TodoList from "./todo/TodoList";

function ToDoHome(props) {
  return (
    <React.Fragment>
      <div className="todo-app">
        <TodoList />
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </React.Fragment>
  );
}

export default withRouter(ToDoHome);