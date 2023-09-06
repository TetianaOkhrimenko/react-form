import React from "react";
import "./RegistrationDialog.css";
import confetti from "./confetti.png";

export default function RegistrationDialog({ email }) {
  return (
    <div className="RegistrationDialog">
      <img src={confetti} alt={confetti}></img>
      <h3> Congratulations!</h3>
      <p> User {email} was registered!</p>
    </div>
  );
}
