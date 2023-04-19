import React, {useReducer} from "react";
const reducer = (state, action)=>{
    switch(action.type){
      case"Add":
      return {...state, value:state.value+action.playload}
  
    case"Reduce":
    return {...state,value:state.value-action.playload};
     default:
     return state;
    }

}

export  const Counter= ()=>{
  const[state, dispatch]=useReducer(reducer, {value:0});


return(
  <>
  <h1>Count{state.value}</h1>
  <button onClick={()=>dispatch({type:"Add", playload:2})}>
  Add 1
  </button>


  <button onClick={()=>dispatch({type:"Add", playload:1})}>
  Add 1
  </button>

  <button onClick={()=>dispatch({type:"Reduce", playload:1})}>
  Reduce
  </button>
  
  
  </>
)
}