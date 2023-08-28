import React, { useState } from "react";

export default function Calc() {
  const [multTwo, setMultTwo] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  //   checking
  function clickHandler() {
    setMultTwo(inputVal * 2);
  }

  return (
    <div>
      <div>
        <label htmlFor="input-val">Input:</label>
        <input
          type="text"
          id="input-val"
          placeholder="type input..."
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          data-testid="calc-input"
        />
        <button onClick={clickHandler} data-testid="calc-btn">
          submit
        </button>
      </div>
      <div>
        <p data-testid="calc-output-val">{inputVal}</p>
        <p data-testid="calc-output-mult-val">{multTwo}</p>
      </div>
    </div>
  );
}
