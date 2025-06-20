import React from "react";
export default function Contact(){
  return(
     <div className="bg-light p-5 mt-4">
      <h3 className="mb-4">Contact Us</h3>
      <p> contact us and will get back to you within 24 hours</p>
       <p><i className="fas fa-map-marker-alt me-2"></i> Company Name</p>
      <p><i className="fas fa-phone me-2"></i> +256 789 800 900</p>
      <p><i className="fas fa-envelope me-2"></i> company@gmail.com</p>

       <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input type="email" className="form-control" placeholder="Email address" />
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea className="form-control" rows="3" placeholder="Comment..."></textarea>
        </div>
        <button type="submit" className="btn btn-danger">Send</button>
      </form>
    </div>


  )
   
    
  

}