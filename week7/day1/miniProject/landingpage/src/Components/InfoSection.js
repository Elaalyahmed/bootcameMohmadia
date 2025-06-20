import React from "react";


export default function infoSection({icon, title, text}) {
  return (
    <div className="d-flex align-items-start mb-4 p-3 bg-light">
      <i className={`fas fa-${icon} fa-3x text-danger me-4`}></i>
      <div>
        <h5>{title}</h5>
        <p>{text}</p>

      </div>


    </div>

  )



}