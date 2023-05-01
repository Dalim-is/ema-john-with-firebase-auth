import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <form>
        <div className="form-container">
          <h2 className="form-title">Sign Up</h2>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Sign In" />
          <p>
            Already Have An Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
