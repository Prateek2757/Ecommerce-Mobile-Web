import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Serviceitems from "./components/Serviceitems";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import BlogState from "./Context/blogs/BlogState";
import Counter from "./components/Reduce";
import Form from "./components/Reduce";
import CartItems from "./components/CartItems";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddProduct from "./components/AddProduct";

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
      <BlogState apiKey={apiKey} showAlert={showAlert} >
        <Router>
          <div className="custom-bgcolor">
            <Navbar mode={mode} text={text} toggleMode={toggleMode} />
            <Alert alert={alert} showAlert={showAlert} />

            <Routes>
              <Route path="/blogs" element={<Serviceitems apiKey={apiKey} />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sign" element={<SignIn showAlert={showAlert} />} />
              <Route path="/signup" element={<SignUp alert={alert} showAlert={showAlert} />} />
              <Route path="/reduce" element={<Form />} />
              <Route path="/cart" element={<CartItems />} />
              <Route path="/addproduct" element={<AddProduct alert={alert} showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </BlogState>
    </>
  );
}

export default App;
