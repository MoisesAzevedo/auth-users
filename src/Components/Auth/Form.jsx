import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <>
      <div className="container">
        <h1>Sign In</h1>
        <label htmlFor="email">E-mail</label>
        <input placeholder="insert your e-mail" className="email" />
        <label htmlFor="password">Password</label>
        <input placeholder="insert your password" className="email" />
        <button type="submit">Login</button>
        <Link className="link" to="/sign-up">
          No have an account?
        </Link>
      </div>
    </>
  );
};

export default Form;
