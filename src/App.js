import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(3);
  const [round, setRound] = useState(1);

  const add = () => {
    if (count < 10) setCount(count + 1);
  };

  const addRound = () => {
    count + 2 >= 10 ? setCount(10) : setCount(count + 2);
    setRound(round + 1);
  };

  const remove = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(3);
    setRound(1);
  };
  return (
    <div className="container">
      <div className="w320">
        <h4 className="m0">Round {round}</h4>
        <h2 className="m0">Energy Count:{count}</h2>
      </div>
      <div className="w320 btc">
        <button className="btn gr" onClick={add}>
          +1
        </button>
        <button className="btn or" onClick={addRound}>
          Round+
        </button>
        <button className="btn rd" onClick={remove}>
          -1
        </button>
        <button className="btn gy" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="w310 tc pb">
        <div class="tooltip smol">
          How to use?
          <span class="tooltiptext">
            <ul>
              <li className="pb">+1 - add 1 to Energy Count</li>
              <li className="pb">Round+ - add 2 to Energy Count, add 1 to Round</li>
              <li className="pb">-1 - remove 1 from Energy Count</li>
              <li>Reset - set everything to default</li>
            </ul>
          </span>
        </div>
      </div>

      <footer className="footer">
        <span className="smol">made with 🤬 by lendlcuyugan</span>
      </footer>
    </div>
  );
}

export default App;
