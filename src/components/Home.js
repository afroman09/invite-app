import React from "react";
import { firebaseConfig } from "../firebase/Firebase.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Timeline from "./timeline/Timeline";

function Home(props) {
  return (
    <React.Fragment>
      <Timeline />
      <Link to="/ToDoHome">
        <button>Todo</button>
      </Link>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </React.Fragment>
  );
}

export default withRouter(Home);
