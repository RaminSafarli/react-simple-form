import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Test extends React.Component {
  render() {
    return (
      <div className="container">
        <form onClick={preventDefault}>
          <h1>Login</h1>
          <input id="email" type="email" placeholder="Email" />
          <input id="password" type="password" placeholder="Password" />
          <button type="submit" onClick={submit}>
            Login
          </button>
          <button id="reset" onClick={reset}>
            Reset Storage
          </button>
        </form>
      </div>
    );
  }
}

function preventDefault(e) {
  e.preventDefault();
}

function submit(e) {
  console.log(document.getElementById("email").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("password", document.getElementById("password").value);
}

function reset(e) {
  localStorage.clear();
}

ReactDOM.createRoot(document.getElementById("root")).render(<Test />);
