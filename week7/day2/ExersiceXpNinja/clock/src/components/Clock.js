import React, { useEffect, useState } from "react";

export default function Clock() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const tick = () => {
        setCurrentDate(new Date())
    };

    useEffect(() =>{
      const timer=  setInterval(tick, 1000);

        return () =>{
        clearInterval(timer);
    } 
    },[]);
   
    

    return (
        <div>
            <h1>Hello,world!</h1>
            <span style={{
                fontSize:"22px",
                fontWeight:"700"
            }}>It is {currentDate.toLocaleTimeString()}</span>
        </div>

    )
}