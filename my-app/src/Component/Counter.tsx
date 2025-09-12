import React, { useReducer } from "react"


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
            Count -- {count}
            <button onClick={()=> dispatch("increment")}>+</button>
            <button onClick={()=> dispatch("decrement")}>-</button>
            <button onClick={()=> dispatch("reset")}>reset</button>
          </div>
    )
}

