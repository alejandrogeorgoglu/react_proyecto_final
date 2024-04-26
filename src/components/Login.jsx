import React from "react";
import "../components/Contact.css";
import Button from "react-bootstrap/Button";
import "../components/Login.css";

export const LoginForm = () => {
  return (
    <div className="container-login">
      <form action="">
        <h1 className="titulo-contacto">Login</h1>
        <div>
          <input
            className="nombre-contacto"
            type="text"
            placeholder="Username"
            required
          />
        </div>
        <hr />
        <div>
          <input
            className="nombre-contacto"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <hr />
        <div className="remember">
          <label>
            <input className="nombre-contacto" type="checkbox" />
            Remember me
          </label>
          <a className="nombre-contacto" href="#">
            Forgot password?
          </a>
        </div>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className="register">
          <p className="nombre-contacto">
            Don´t have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
