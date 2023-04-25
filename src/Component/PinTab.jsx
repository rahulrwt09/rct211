import React,{useRef, useState} from "react";
import ProTypes from "prop-types";
export const PinTab =({length,maxchar})=>{
 const [pinlength,setpinlength] =useState(new Array(length).fill(" "));

 let inputRef= useRef([]);
  console.log(inputRef)  
  const handelfocus= (e, index)=>{
  if(e.target.value>=maxchar && index<length-1){
    inputRef.current[index+1].focus();
  }
  }
 return(
        <div>
            {
    pinlength.map((_,index)=>{return <input ref={(e)=>{
       inputRef.current[index]=e;
    }} key={index} maxLength={maxchar} 
    onChange={(e)=>handelfocus(e, index)} />
    })     
            }
        </div>
    )
};
PinTab.ProTypes= {
    length:ProTypes.number,
    maxchar:ProTypes.number,
}