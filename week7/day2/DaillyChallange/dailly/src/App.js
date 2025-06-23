import React, { useState } from "react";
import "./App.css"; 
function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (languageName) => {
    const updatedLanguages = languages.map((lang) =>
      lang.name === languageName
        ? { ...lang, votes: lang.votes + 1 }
        : lang
    );
    setLanguages(updatedLanguages);
  };

  return (
    <div className="app-container">
      <h1 className="title"> Vote Your Favorite Language</h1>

      <div className="card-list">
        {languages.map((lang, index) => (
          <div className="language-card" key={index}>
            <h2>{lang.name}</h2>
            <p>Votes: <span className="votes">{lang.votes}</span></p>
            <button onClick={() => handleVote(lang.name)} className="vote-btn">
              Click Here 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
