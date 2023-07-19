import React from 'react'
import { useState } from 'react'
import { hydrate } from 'react-dom';

function Projact() {
    const[input,Setinput]=useState();
    const [printValue, setPrintValue]=useState([]);

    function handleChange(e){
        Setinput(e.target.value);
    }

    function handleClick(){
        setPrintValue([...printValue, input])
    }



  return (
    <div>
        <h1>Welcome to React</h1>
      <input onChange={handleChange} typeof='text' placeholder='Enter Your Name'></input>  
      <button onClick={handleClick}>Click Now</button>
      <p>{printValue}</p>
    </div>
  )
}

export default Projact
