import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function Top() {
  return (
    <div class="wrapper">
      <div className="auth-container">
        <h1>Invite</h1>
        <h2>「誘うを簡単に」</h2>
        <Link to="/Login" className="auth-bottom">
          Loginはこちら
        </Link>
        <Link to="/SignUp" className="auth-bottom">
          SignUpはこちら
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Top);
