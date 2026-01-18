import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [show, setShow] = useState(true);

  if (!show) return <button onClick={() => setShow(true)}>login</button>;

  return (
    <div className="overlay">
      <div className="login-form">
        <button className="close-btn" onClick={() => setShow(false)}>x</button>
        <h2 className="login-title">LoginForm</h2>
        <p>user name :</p>
        <input type="text" />
        <p>password :</p>
        <input type="password" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}
export default LoginForm;
