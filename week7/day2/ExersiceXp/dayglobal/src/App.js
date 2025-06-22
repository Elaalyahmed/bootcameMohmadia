import React from "react";
import Car from "./components/Car";
import Garage from "./components/Garage";
import Event from "./components/Event";


 export default function App() {
  const carInfo = {model: "Mustang" };
  return (
    <div className="App">
      <Car carInfo={carInfo}/>
      <Garage size={'small'}/>
      <Event/>

    </div>
  )
}
