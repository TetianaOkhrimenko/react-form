import React from "react";
import "./Input.css";

export default function Input({ label, name, ...rest }) {
  return (
    <div className="Input">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest}></input>
    </div>
  );
}
