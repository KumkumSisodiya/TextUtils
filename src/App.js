import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0,0,128)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <TextForm
            showAlert={showAlert}
            heading="Enter Text to analyze "
            mode={mode}
          />
          {/* Render the About component here if needed */}
          <About />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
