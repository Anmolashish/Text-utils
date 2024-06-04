import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextContent from "./components/TextContent";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated", "success");
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

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextContent mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
