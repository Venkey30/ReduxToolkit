import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";
import { decrement } from "./counterSlice";

function Counter() {
   var {count} = useSelector((state) => state.cntR);
   var dispatch = useDispatch();

  return (
    <div className="border border-2 border-danger m-2 p-2">
        <h1>Counter: {count}</h1>
        <button 
            onClick={() => 
                {dispatch(increment());    
                }}
                >Inc</button>
        <button onClick={() => 
            {dispatch(decrement());
            }}>Dec</button>
    </div>
  );
}

export default Counter;