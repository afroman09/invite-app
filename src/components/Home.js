import React from "react";
import { firebaseConfig } from "../firebase/Firebase.js";
import TodoList from './todo/TodoList'

function Home(props) {
  return (
    <div>
      <h2>Home Page</h2>
      {/* ユーザーをログアウトさせる */}
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>

      <div className="todo-app">
      <TodoList />
    </div>

    </div>
    
  );
}

export default Home;