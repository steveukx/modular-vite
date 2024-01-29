import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import add from '@modular-vite/modular-source';

function App(): JSX.Element {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <header className="App-header">App</header>
      <main>
        <p>Value: {value}</p>
        <p>
          <button onClick={() => setValue(a => add(-1, a))}>--</button>
          <button onClick={() => setValue(a => add(a, a))}>x2</button>
          <button onClick={() => setValue(a => add(1, a))}>++</button>
        </p>
      </main>
    </div>
  );
}

export default App;
