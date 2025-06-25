import React, { useState } from "react";
import FormComponent from "./components/FormComponent";


export default function App(props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  })

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setForm(prevData => ({
      ...prevData, [name]: type === "chekbox" ? checked : value
    }));

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    for (let key in form) {
      if (typeof form[key] === "boolean") {
        if (form[key]) {
          params.append(key, "on");
        }
      } else {
        params.append(key, form[key]);
      }
    }

    window.location.href = `http://localhost:3000/?${params.toString()}`;
  };


  return (
    <div>
      <FormComponent form={form} handleChange={handleChange} handleSubmit= {handleSubmit} />


    </div>





  );
}


