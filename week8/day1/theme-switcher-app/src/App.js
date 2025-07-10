import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CharacterCounter from "./CharacterCounter";

function App() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
    color: theme === "light" ? "#222" : "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease"
  };

  return (
    <div style={styles}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <ThemeSwitcher />
      <CharacterCounter/>
    </div>
  );
}

export default App;
