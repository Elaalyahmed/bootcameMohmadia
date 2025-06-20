import React from "react";
import InfoSection from "./Components/InfoSection"
import Contact from "./Components/Contact"
import Header from "./Components/Header"


export default function App() {
   
             const infoData = [
            {
                icon: 'building',
                title: 'About the Company',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            },
            {
                icon: 'globe',
                title: 'Our Values',
                text: 'Values: Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            },
            {
                icon: 'university',
                title: 'Our Mission',
                text: 'Mission: Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            },
        ];

    return(
        <div>
      <Header />
      <div className="container mt-4">
        {infoData.map((info, index) => (
          <InfoSection key={index} {...info} />
        ))}
        <Contact />
      </div>
    </div>
    )
} 