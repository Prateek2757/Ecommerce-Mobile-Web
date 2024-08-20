import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Serviceitems from "./components/Serviceitems";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("Apikey", apiKey);

  const [mode, setMode] = useState("light");
  const [text, setButtonText] = useState("Enable Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButtonText("Enable light");
      showAlert("success", "your dark mode has been enabled");
    } else {
      setMode("light");
      setButtonText("Enable dark");
      showAlert("success", "your light mode has been enabled");
    }
  };
  return (
    <>
      <Router>
        <div className={`bg-${mode} min-vh-100`}>
          <Navbar mode={mode} text={text} toggleMode={toggleMode} />
          <Alert alert={alert} showAlert={showAlert} />

          <Routes>
            <Route path="/blogs" element={<Serviceitems apiKey={apiKey} />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
