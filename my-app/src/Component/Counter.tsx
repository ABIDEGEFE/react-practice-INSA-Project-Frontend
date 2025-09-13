import React, { useReducer } from "react"
import { Button } from "../Common/button";


const initialState = 0
const reducer = (state:number, action:string) => {
    switch(action){
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}

export function Counter () {
    const [count, dispatch] = useReducer(reducer, initialState)
        return (
          <div>
            <p>Count {count}</p>
            <Button variant="primary" size="md" onClick={()=> dispatch("increment")}>+</Button>
            <Button variant="secondary" size="md" onClick={()=> dispatch("decrement")}>-</Button>
            <Button variant="outline" size="md" onClick={()=> dispatch("reset")}>reset</Button> 
            {/* <button onClick={()=> dispatch("increment")}>+</button>
            <button onClick={()=> dispatch("decrement")}>-</button>
            <button onClick={()=> dispatch("reset")}>reset</button> */}

          </div>
    )
}

