import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import fetchCompletion from "./Utils/gpt";

function App() {
  useEffect(() => {
    fetchCompletion();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About the Wonderful Life of Omar Abdelaziz****.
        </a>
      </header>
    </div>
  );
}

export default App;
