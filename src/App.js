import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testId="counter">{count}</h3>
        <div>
          <button
            data-testId="minus-button"
            onClick={() => setCount((prev) => prev - 1)}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testId="plus-button"
            onClick={() => setCount((prev) => prev + 1)}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testId="on/off-button"
            onClick={() => setDisabled((prev) => !prev)}
          ></button>
        </div>
      </header>
    </div>
  );
}

export default App;
