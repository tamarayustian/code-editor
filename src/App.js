import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");

  return (
    <div className="App">
      <div className="ControlsBox"></div>
      <div className="PanelsBox"></div>
    </div>
  );
}
