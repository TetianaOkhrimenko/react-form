import React, { useState } from "react";
import Input from "./Input";
import "./Form.css";

export default function Form({ onSubmit }) {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputEmail = (event) => {
    const email = event.target.value;
    //setUser({ ...user, email });

    setUser({ email: email, password: user.password });
  };

  const handleInputPassword = (event) => {
    const password = event.target.value;
    //setUser({ ...user, password });

    setUser({ email: user.email, password: password });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = user;

    if (!email.includes("@")) return;

    if (!password.trim()) return;

    onSubmit(user);
  };
  return (
    <div className="Form">
      <h1>Welcome!</h1>
      <h4>Let's create your account!</h4>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          required={true}
          value={user.email}
          onChange={handleInputEmail}
        />{" "}
        <Input
          label="Password"
          name="password"
          type="password"
          required={true}
          value={user.password}
          onChange={handleInputPassword}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
