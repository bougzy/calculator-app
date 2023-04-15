import React, { useState } from "react";
import "./App.css";

interface IProps {}

const App: React.FC<IProps> = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (val: string) => {
    if (val === "C") {
      setInput("");
      setResult(0);
    } else if (val === "=") {
      setResult(eval(input));
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{result}</div>
        <div className="buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
