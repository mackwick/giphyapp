import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Gif from "./components/Gif";

function App() {
  const apiKey = "jnN8ZhR5f1oKYwov8NicuoU1aq24hMvP";
  return (
    <div className="App">
      <Header />
      <Button />
      <Gif />
    </div>
  );
}

export default App;
