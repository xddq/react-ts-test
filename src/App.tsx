import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(5);

  // const [numOrString, setNumberOrString] = useState<string | number>(5);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Number is {number}</p>
        <button onClick={() => setNumber(number + 1)}>
          Increase Value on Click{" "}
        </button>
        <button onClick={() => setNumber(number - 1)}>
          Decrease Value on Click
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
