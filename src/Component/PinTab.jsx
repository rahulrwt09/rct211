import React,{useRef, useState} from "react";
import ProTypes from "prop-types";
export const PinTab =({length,maxchar})=>{
 const [pinlength,setpinlength] =useState(new Array(length).fill(" "));

 let inputRef= useRef([]);
  console.log(inputRef)  
  const handelfocus= (e, index)=>{
  if(e.target.value>=maxchar && index<length-1){
    inputRef.current[index+ 1].focus();
  }
  }
  
   const backspace= (e,index)=>{
    if(e.target.value.length===0 && index>0){
        inputRef.current[index-1].focus();
    }
   }

  const keyhandel= (e,index)=>{
    
    if(e.keyCode===8){
       backspace(e,index);
    }
    else{
        handelfocus(e,index)
    }
  };

 return(
        <div>
            {
    pinlength.map((_,index)=>{return <input ref={(e)=>{
       inputRef.current[index]=e;
    }} key={index} maxLength={maxchar} 
    

    onKeyUp={(e)=>keyhandel(e,index)}
    />
    })     
            }
        </div>
    )
};
PinTab.ProTypes= {
    length:ProTypes.number,
    maxchar:ProTypes.number,
}