import "./App.css";

import HomeScreen from "./components/Home";
import PlayerScreen from "./components/Player";
import BotScreen from "./components/Bot";

import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/player-screen" element={<PlayerScreen />} />
          <Route path="/bot-screen" element={<BotScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;