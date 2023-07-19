import React ,{ useState } from "react";

function Counter() {
  const [counter,setcounter]= useState(0);
  function inc() {
    if(counter < 10) setcounter(counter +1); 
  }
  function dec() {
    if(counter > 0) setcounter(counter -1);
  }
  return(
    <>
    {/* <button onClick={inc}>Increment</button>
    <p>{counter}</p>
    <button onClick={dec}>decrement</button> */}
    <button onClick={() =>{if(counter < 10) setcounter(counter + 1)}}>Increment</button>
    <p>{counter}</p>
    <button onClick={() => {if(counter > 0) setcounter(counter - 1)}}>decrement</button>
  
    </>
  );
}

export   default Counter;