import React, { useState } from "react";

export default function Forms() {


    const [age, setAge] = useState('')
    const [errormessage, setErrormessage] = useState('')
    const [textarea, setTextarea] = useState(" The content of a textarea goes in the value attribute")
    const [select, setSelect] = useState('Volo')

    const mySubmitHandler = (e) => {
        e.preventDefault();

        if (isNaN(age)) {
            // alert("Age must be a number");
            setErrormessage(" your age must be a number");

            return;
        }
        setErrormessage('');
        alert(`you are submitting ${username} ${age}`)


    }


    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };



    const handchange = (e) => {
        setUsername(e.target.value)

    }


    const [username, setUsername] = useState("");



    let Header;
    if (username !== "") {
        Header = <h2>Hello {username}{age}</h2>

    }
    return (
        <div>
            {Header}
            <form onSubmit={mySubmitHandler} >
                <label>Enter your name:</label> <br></br>
                <input type="text" name="username" onChange={handchange}></input>
                <button type="submit">Submet</button>
                <p>Enter your age:</p>
                <input type="text" name="age" onChange={handleAgeChange}></input>
                {errormessage && <div style={{ color: "red" }}>{errormessage}</div>}<br/>
                <br/>
                <textarea
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    rows="5"
                    cols="40"
                />
                <br/>
                <select
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    <option value="Volvo">Volvo</option>
                    <option value="Ford">Ford</option>
                    <option value="Fiat">Fiat</option>

                </select>



            </form>
        </div>



    )


}

