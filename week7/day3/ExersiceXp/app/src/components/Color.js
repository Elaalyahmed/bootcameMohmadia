import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red"
    };
  }

  componentDidMount() {
    alert("useEffect reached");
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default Color;
