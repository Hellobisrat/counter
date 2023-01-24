
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter]=useState(1)
  const Addbutton=()=>{
    return(
      setCounter(counter+1)
      
    )
  }
  const Minusbutton=()=>{
    return (
      setCounter(counter-1)
    )
  }
  return (
    <div className="App">
      <h1> Exercise -A</h1>
      <input placeholder={counter}></input>
      <div>
      <button onClick={Addbutton}> + </button>
       <button onClick={Minusbutton}>-</button>
       </div>
    </div>
  );
}

export default App;
