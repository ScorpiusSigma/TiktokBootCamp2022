import "./App.css";
import PlayerScreen from "./components/PlayerScreen";
import BotScreen from "./components/BotScreen";
import Navigation from "./components/Navigation";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<PlayerScreen />} />
          <Route path="/bot-screen" element={<BotScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
