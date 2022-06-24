import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const login = () => {
    console.log("User Name: " + username + " Password: " + password);
    if (username === "hassan" && password === "HassanTuri") {
      navigate("/admin");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <>
      <h2>Hassan Turi Admin</h2>
      <h2>Login</h2>
      <h3>Please enter your credentials to login to the dashboard.</h3>
      <br />
      <div className="login">
        <form id="login">
          <label>
            <b>User Name</b>
          </label>
          <input
            type="text"
            value={username}
            onChange={handleNameChange}
            name="Uname"
            id="Uname"
            placeholder="Username"
          />
          az
          <br />
          <br />
          <label>
            <b>Password</b>
          </label>
          <br />
          <input
            type="Password"
            value={password}
            onChange={handlePasswordChange}
            name="Pass"
            id="Pass"
            placeholder="Password"
          />
          <br />
          <br />
          <button type="submit" id="log" onClick={login}>
            Login Here
          </button>
          <br />
          <br />
        </form>
      </div>{" "}
    </>
  );
};

export default Login;
