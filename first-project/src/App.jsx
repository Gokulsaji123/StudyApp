import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Materials from "./components/Materials";

function App() {
  const [section, setSection] = useState("VARC");
  function changeSection(selectedSection) {
    const item = selectedSection.data;
    setSection(item);
  }
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div id="main-container">
        <Navbar section={section} changeSection={changeSection} />
        <Materials section={section} />
      </div>
      <footer className="footer">
        <p>© {year}</p>
      </footer>
    </>
  );
}

export default App;
