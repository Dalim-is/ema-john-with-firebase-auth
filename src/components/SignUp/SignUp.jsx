import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    setError("");
    if (password !== confirm) {
      setError("Your password Did Not Match");
      return;
    } else if (password.length < 6) {
      setError("Password Must be 6 Character Or Longer");
      return;
    }
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Sign In" />
          <p>
            Already Have An Account? <Link to="/login">Login</Link>
          </p>
          <p className="text-error">{error}</p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
