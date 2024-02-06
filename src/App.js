import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {

  const [cnt,setCnt]=useState(0);

  function subHandler(){
    
    if(cnt-1>=0){
      setCnt(cnt-1);
    }
    
  }

  function addHandler(){
    setCnt(cnt+1);
  }

  function resetHandler(){
    setCnt(0);
  }

  return (

      <div  className="container">

        <div className="heading">Increment and Decrement</div>

        <div className="mainCon"> 

          <button onClick={subHandler}>
            -
          </button>

          <div className="input">
            {cnt}
          </div>

          <button  onClick={addHandler}>
            +
          </button>

        </div>

          <button className="submit" onClick={resetHandler} >
            reset
          </button>

      </div>
    
  );
}

export default App;
