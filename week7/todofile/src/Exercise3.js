import React, { Component } from "react";
import "./Exercise.css"

export default class Exercise extends Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={style_header}>This is a Header</h1>
                <p className="para">This is a Paragraph</p>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    This is a Link
                </a>

                <h3>This is a Form:</h3>
                <form>
                    <label>Enter your name:</label><br />
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>

                <h3>Here is an Image:</h3>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    width="300"
                />

                <h3>This is a List:</h3>
                <ul style={{ listStyle: "disc", display: "inline-block", textAlign: "left" }}>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        );
    }
}
