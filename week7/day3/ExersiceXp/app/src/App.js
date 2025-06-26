import React, { Component } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Color from "./components/Color";

export default class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
        

    }
    handleClick = () => {
        this.setState((prevstate) => ({
            counter: prevstate.counter + 1,

        }))
        if (this.state.counter >= 5) {
            alert("throw error")

        }
    }
    render() {
        if (this.state.counter === 5) {
            throw new Error("I crashed!");
        }

        return (
            <div
                onClick={this.handleClick}
                style={{ cursor: "pointer", fontSize: "20px", padding: "10px", border: "1px solid black" }}
            >
                Counter: {this.state.counter}
                <ErrorBoundary/>
                <Color/>
            </div>
        );
    }
}

