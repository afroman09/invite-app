import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import { AuthContext } from "./AuthProvider";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const LoginButton = styled(Button)({
  background: '#6fc4f9',
  fontSize: '1.2rem',
  border: 0,
  borderRadius: 3,
  color: 'white',
  padding: '10px 30px',
  marginTop: '30px',
  '&:hover': {
    backgroundColor: '#57baf8',
  },
});


const Login = ({ history }) => {
  const { login } = useContext(AuthContext);

  // AuthContextからlogin関数を受け取る
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value, history);
  };

  return (
    <div className="wrapper">
      <div className="auth-container">
        <h1>Login</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form-item">
            <label>E-mail Address</label>
            <input name="email" type="email" placeholder="email@gmail.com" />
          </div>
          <div className="auth-form-item">
            <label>Password</label>
            <input name="password" type="password" placeholder="Password"/>
          </div>
            <LoginButton type="submit">Login</LoginButton>
        </form>
        <Link to="/signup" className="auth-bottom" >SignUpはこちら</Link>
      </div>
    </div>
  );
};

export default withRouter(Login);