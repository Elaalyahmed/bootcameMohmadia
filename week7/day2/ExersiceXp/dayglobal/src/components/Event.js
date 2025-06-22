import React, { useEffect, useState } from "react";

const ColorComponent = () => {
  const [favoriteColor, setFavoriteColor] = useState("yellow");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
};

const Color = () => {
  const favoriteColor = "red";
  return <h1>My favorite color is {favoriteColor}</h1>;
};

const Phone = () => {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhone({ ...phone, color: "blue" });
  };

  return (
    <div>
      <h1>My phone is a {phone.brand}</h1>
      <p>
        It is a {phone.color} {phone.model} from {phone.year}
      </p>
      <button onClick={changeColor}>Change Phone Color</button>
    </div>
  );
};

const Event = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const onClick = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Press the Enter key!"
        onKeyDown={handleKeyDown}
      />
      <br />
      <br />
      <button onClick={handleToggle}>{isToggleOn ? "ON" : "OFF"}</button>

      <Phone />
      <Color />
      <ColorComponent />
    </div>
  );
};

export default Event;
