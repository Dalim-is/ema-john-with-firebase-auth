import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form>
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Login" />
          <p>
            New to Ema-john? <Link to="/SignIn">Create New Account</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
