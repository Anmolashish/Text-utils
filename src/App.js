import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextContent from "./components/TextContent";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been activated", "success");
      document.title = "React - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated", "success");
      document.title = "React - Light mode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const theme1 = () => {
    setMode("primary");
    document.body.style.backgroundColor = "blue";
    showAlert("The theme is applied", "success");
    document.title = "React - Blue mode";
  };
  const theme2 = () => {
    setMode("success");
    document.body.style.backgroundColor = "green";
    showAlert("The theme is applied", "success");
    document.title = "React - Green mode";
  };
  const theme3 = () => {
    setMode("danger");
    document.body.style.backgroundColor = "red";
    showAlert("The theme is applied", "success");
    document.title = "React - Red mode";
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
        theme1={theme1}
        theme2={theme2}
        theme3={theme3}
      />
      <Alert alert={alert} />
      <TextContent mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
