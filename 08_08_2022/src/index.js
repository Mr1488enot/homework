import {useRef} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Counter></Counter>
  </div>
);

function Counter () {
  const inputRef = useRef(null)

  function click () {
    console.log('value', inputRef.current.value)
  }


  return (
    <div className="App">
      <input ref = {inputRef} type="text"></input>
      <div className="result"></div>
      <button onClick= {click}>knopka</button>
    </div>
  )
}