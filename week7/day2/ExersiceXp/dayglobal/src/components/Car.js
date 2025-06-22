import React, {useState} from "react";

 const Car = ({carInfo}) =>{
    const [ color,setColor]= useState('red')

   return (
    <header>
      <h1>This car is {color} {carInfo.model}</h1>
      <button onClick={() => setColor('blue')}>
        Change Color to Blue
      </button>
    </header>
  );
};
export default Car



