import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import { AuthProvider } from "./Auth/AuthProvider";
import Home from "./components/Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/Home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;