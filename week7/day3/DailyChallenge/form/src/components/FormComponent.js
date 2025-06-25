import React from "react";

export default function FormComponent({ form, handleChange }) {
    return (
        <div>
            <form  style={{backgroundColor:"#EB983B"}}>
                <h1 style={{color:"white", backgroundColor:"black"}}>simple form</h1>
                <input type="text" name="fristName" placeholder="Frist Name" value={form.fristName} onChange={handleChange}></input> <br/>
                <br/>
                <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange}></input> <br/>
                <br/>
                <input type="number" name="age" placeholder="Age" onChange={handleChange}></input> <br/>
                <label> Male<input type="radio" name="gender" value= 'Male' checked={form.gender === "male"} onChange={handleChange}></input></label> <br/>
                <label> Female<input type="radio" name="gender" value= 'Female'  checked={form.gender === "female"} onChange={handleChange}></input></label>

                <br />
                <label>Select your destination</label>
                <br />
                <select
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Japan">Japan</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                </select>
                <br />
                <label>Dietary restrictions:</label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="nutsFree"
                        checked={form.nutsFree}
                        onChange={handleChange}
                    />
                    Nuts free
                </label>
                <br/>
                
                <label>
                    <input
                        type="checkbox"
                        name="lactoseFree"
                        checked={form.lactoseFree}
                        onChange={handleChange}
                    />
                    Lactose free
                </label>
                <br/>
            
                <label>
                    <input
                        type="checkbox"
                        name="vegan"
                        checked={form.vegan}
                        onChange={handleChange}
                    />
                    Vegan
                </label>
                <br/>
                <button type="submit" style={{padding:"8px"}}>Submit</button>
            </form>

            <hr />

            <div style={{ background: "#004d4d", color: "white", padding: "15px", borderRadius: "10px", width: "300px" }}>
                <h3>Entered information:</h3>
                <p>Your name: {form.fristName} {form.lastName}</p>
                <p>Your age: {form.age}</p>
                <p>Your gender: {form.gender}</p>
                <p>Your destination: {form.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>**Nuts free: {form.nutsFree ? "Yes" : "No"}</p>
                <p>**Lactose free: {form.lactoseFree ? "Yes" : "No"}</p>
                <p>**Vegan meal: {form.vegan ? "Yes" : "No"}</p>
            </div>



        </div >



    )

}