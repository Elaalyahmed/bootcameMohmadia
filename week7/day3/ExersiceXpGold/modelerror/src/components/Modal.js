import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
    };
  }

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { selectedValue } = this.state;

    return (
      <div className="modal-background">
        <div className="modal-body">
          <h3>Error: Something went wrong!</h3>

          <select>
            <option value="Details">Details</option>
            <option value="in r">in r</option>
            <option value="in div">in div</option>
            <option value="in StrictMode">in StrictMode</option>
          </select>

          <p>Please try it again</p>

          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}
