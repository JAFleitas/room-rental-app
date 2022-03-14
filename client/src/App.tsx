import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { increment, decrement } from './redux/reducers/countReducer';
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { AppDispatch } from './redux/store/store';


function App() {
  const [count, setCount] = useState(0)
  const contador:number = useSelector((state: RootStateOrAny) => state.Contador.value);
  const dispatch: AppDispatch = useDispatch();

  const incrementValue = () => {
    dispatch(increment(1))
  }

  const decrementValue = (value: number) => {
    dispatch(decrement(value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <br/>
        <p>Contador: {contador}</p>
        <input type="button" onClick={incrementValue} value="+"/>
        <input type="button" onClick={() => decrementValue(1)} value="-"/>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
