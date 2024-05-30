import "./App.css";
import Navbar from "./components/Navbar";
import TextContent from "./components/TextContent";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <TextContent />
      </div>
    </>
  );
}

export default App;
