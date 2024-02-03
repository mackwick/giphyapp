import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Gif from "./components/Gif";
import { useState, useEffect } from "react";

function App() {
  const apiKey = "jnN8ZhR5f1oKYwov8NicuoU1aq24hMvP";
  //set up use state
  const [gif, setGif] = useState(null);

  //function to get random gif
  const getGif = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/random?apikey=jnN8ZhR5f1oKYwov8NicuoU1aq24hMvP";
    //fetch a gif
    const response = await fetch(url);
    //get json version of response
    const data = await response.json();
    setGif(data);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Header />
      <Button genGif={getGif} />
      <Gif randomGif={gif} />
    </div>
  );
}

export default App;
