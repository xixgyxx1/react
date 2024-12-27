
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter +1;
    setCounter2(counter2+1);
    setValue(value+2)
    console.log("counter",counter,"state",counter2)
  }
  useEffect(()=>{
    console.log("useEffect1 Fire")
  },[])

  useEffect(()=>{
    console.log("userEffect2 fire",counter2,value)
  },[counter2,value]);

  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
     
    </div>
  );
}

export default App;
