import React, { useState } from 'react'
import logo from '../../logo.svg';
import assetsPath from "../main";

const assetPath = assetsPath()
function App() {
  const [count, setCount] = useState(1)

  const onClick = async () => {
    const {demo} = await import(`${assetPath}types/demo`)
    demo()
  }

  return (
    <div className="App" onClick={onClick}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
