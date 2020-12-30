import React from "react";
import { firebaseConfig } from "../firebase/Firebase.js";

function Home(props) {
  return (
    <div>
      <h2>Home Page</h2>
      {/* ユーザーをログアウトさせる */}
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
  );
}

export default Home;