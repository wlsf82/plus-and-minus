import React, { useState } from 'react';
import './App.css';

function App() {
  const [n, setN] = useState(0);

  return (
    <div className="App">
      <div className="btn" onClick={() => setN(n - 1)}>-</div>
        { n }
      <div className="btn" onClick={() => setN(n + 1)}>+</div>
    </div>
  );
}

export default App;
