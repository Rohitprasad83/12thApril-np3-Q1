import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [output, setOutput] = useState(null);
  const reverseTheOutput = (output) => {
    setOutput(output.split('').reverse().join(''));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setOutput(e.target.value)} />
      <h4>{output && output}</h4>
      <button onClick={() => reverseTheOutput(output)} disabled={!output}>
        Mirror It
      </button>
    </div>
  );
}
