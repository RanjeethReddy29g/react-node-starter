import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <h1>React + Node.js Project</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
