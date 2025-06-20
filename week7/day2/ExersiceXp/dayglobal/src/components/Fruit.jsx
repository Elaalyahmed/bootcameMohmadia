import React from "react";

export default function Fruits({fruits}){
    const displayFruit = ()=>{
        return fruits.map(fruit => <li>{fruit}</li>)
    }
    return (
       <>
         <h1>Fruit:</h1>
          <ul>
           { displayFruit()}
          </ul>
       </>
    )
}