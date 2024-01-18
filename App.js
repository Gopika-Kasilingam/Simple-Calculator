import React, {useState} from 'react'
import './App.css';

function App() {
  const[value, setValue] =useState('');
  return (
    <div className="App">
      <div className="container">
        <div className="calculator">
        <h1>Simple Calculator</h1>
          <form>
            <div className="display">
              <input type="text" name="display" value={value}></input>
            </div>
            <div>
              <input type="button" value="AC" onClick={e=> setValue('')} className="operator"></input>
              <input type="button" value="DE" onClick={e=> setValue(value.slice(0,-1))} className="operator"></input>
              <input type="button" value="%" onClick={e=> setValue(value+e.target.value)} className="operator"></input>
              <input type="button" value="/" onClick={e=> setValue(value+e.target.value)} className="operator"></input>
            </div>

            <div>
              <input type="button" value="7" onClick={e=> setValue(value+e.target.value)}/>
              <input type="button" value="8" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="9" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="*" onClick={e=> setValue(value+e.target.value)} className="operator"></input>
            </div>

            <div>
              <input type="button" value="4" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="5" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="6" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="-" onClick={e=> setValue(value+e.target.value)} className="operator"></input>
            </div>

            <div>
              <input type="button" value="1" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="2" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="3" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="+" onClick={e=> setValue(value+e.target.value)} className="operator"></input>
            </div>

            <div>
              <input type="button" value="(/)" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="0" onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="." onClick={e=> setValue(value+e.target.value)}></input>
              <input type="button" value="=" className="equal" onClick={e=> setValue(eval(value))}></input>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
