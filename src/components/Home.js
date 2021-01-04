import React from "react";
import { firebaseConfig } from "../firebase/Firebase.js";
import { Link } from "react-router-dom";
import TodoList from "./todo/TodoList";
import Timeline from "./timeline/Timeline";

function Home(props) {
  return (
    <div>
      <Timeline />
      <div className="todo-app">
        <TodoList />
      </div>
      <Link to="/todo/ToDoHome">
        <button>Todo</button>
      </Link>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
  );
}

export default Home;
