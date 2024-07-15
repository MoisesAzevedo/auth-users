import React from "react";
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input placeholder="insert your username" className="email" />
        <label htmlFor="email">E-mail</label>
        <input placeholder="insert your e-mail" className="email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="insert your password"
          className="email"
        />
        <button type="submit">Register</button>
        <Link className="link" to="/">
          Already have an account?
        </Link>
      </div>
    </>
  );
};

export default FormRegister;
