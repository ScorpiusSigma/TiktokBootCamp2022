import { useEffect, useState } from "react";
import "../App.css";
import Figure from "./Figure";
import Popup from "./Popup";
import Word from "./Word";
import WrongWordPool from "./WrongWordPool";
import Navigation from "./Navigation";

function Player() {
  const [answer, setAnswer] = useState("TIKTOKBOOTCAMP");
  const [correctChars, setCorrectChars] = useState([]);
  const [wrongChars, setWrongChars] = useState([]);
  const [playable, setPlayable] = useState(true);

  const handleKeyPress = (e) => {
    // handles user key input
    const key = e.key.toUpperCase();
    const regex = /^[A-Za-z]+$/; //condition for alphabets only

    if (!regex.test(key) || key === "ENTER") {
      // Ensures that the keys are only alphabets
      return;
    }

    // appending the correct letter onto the correctChars array
    if (answer.includes(key) && !correctChars.includes(key)) {
      setCorrectChars([...correctChars, key]);
      return;
    }

    if (!answer.includes(key) && !wrongChars.includes(key)) {
      setWrongChars([...wrongChars, key]);
      return;
    }
  };

  const replay = () => {
    setCorrectChars([]);
    setWrongChars([]);

    const newWord = "SHREK";
    setAnswer(newWord);
  };

  useEffect(() => {
    // Listens for user key input
    document.addEventListener("keypress", handleKeyPress, true);

    return () => {
      // Removes event listener to prevent memory leak
      document.removeEventListener("keypress", handleKeyPress, true);
    };
  }, [answer, correctChars, wrongChars]);

  return (
    <div className="game-container">
      <Navigation />
      <div className="App App-header">
        <h1 className="text-4xl font-bold">Player</h1>
        <br />
        <h1 className="text-3xl md:text-6xl font-bold">Guess the Word</h1>
      </div>
      <div className="game">
        <Figure wrongChars={wrongChars} />
        <br />
        <Word data={answer} correctChars={correctChars} />
        <br />
        <WrongWordPool data={wrongChars} />
      </div>
      <Popup
        correctChars={correctChars}
        wrongChars={wrongChars}
        answer={answer}
        setPlayable={setPlayable}
        replay={replay}
      />
    </div>
  );
}

export default Player;
