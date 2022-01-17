import { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PureChild from './PureChild';

function App() {
  const [input, setInput] = useState('')
  const mySubFunc = useCallback(() => setInput(), [setInput])
  useEffect(() => { console.log('didupdate') })
  useEffect(() => { console.log('didmount') }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input onChange={(event) => setInput(event.target.value)} value={input} />
        <PureChild setInput={mySubFunc} />
      </header>
    </div>
  );
}

export default App;
