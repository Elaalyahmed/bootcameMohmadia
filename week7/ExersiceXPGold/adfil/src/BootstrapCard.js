import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function BootstrapCard({title, imageUrl, description, buttonLabel, buttonUrl}) {
    return (
        <div className="card m-5" style={{ width: '30rem' }}>
            <img className="card-img-top" src= {imageUrl} alt= {title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <a href="{buttonUrl}" className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>


    )
}

