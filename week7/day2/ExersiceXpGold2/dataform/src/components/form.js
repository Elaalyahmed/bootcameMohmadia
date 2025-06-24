import React, { useState } from "react";

export default function Book() {
  const [book, setBook] = useState({
    Title: "",
    author: "",
    Genre: "",
    yearPublished: ""
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleBookSubmit = (e) => {
    e.preventDefault();
    console.log({
      Title: book.Title,
      Author: book.author,
      Genre: book.Genre,
      Year_Published: book.yearPublished
    });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phone || !email) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div>
      {/* Book Form */}
      <form onSubmit={handleBookSubmit}>
        <h1>New Book</h1>
        <label>
          Title
          <input
            type="text"
            name="Title"
            value={book.Title}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Author
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Genre
          <input
            type="text"
            name="Genre"
            value={book.Genre}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Year Published
          <input
            type="text"
            name="yearPublished"
            value={book.yearPublished}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <button type="submit">Submit Book</button>
      </form>

      <hr />

      {/* User Info Form */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#eee",
          padding: "20px",
          borderRadius: "20px",
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <h1 style={{
            
        textAlign: "center",
        color:"green",
        fontSize: "40px"

        }}>Welcome!</h1>
        <p>Please provide your information below.</p>

        {submitted ? (
          <div>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <form onSubmit={handleUserSubmit} style={{
            margin: "38px"
          }} >
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br /><br />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br /><br />
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br /><br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
