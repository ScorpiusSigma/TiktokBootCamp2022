import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Word from "./components/Word";
import WrongWordPool from "./components/WrongWordPool";

function App() {
  const [answer, setAnswer] = useState("TIKTOKBOOTCAMP");
  const [correctChars, setCorrectChars] = useState([]);
  const [wrongChars, setWrongChars] = useState([]);

  const handleKeyPress = (e) => {
    // handles user key input
    const key = e.key.toUpperCase();
    const regex = /^[A-Za-z]+$/; //condition for alphabets only

    if (!regex.test(key) || key === "ENTER") {
      // Ensures that the keys are only alphabets
      return;
    }

    if (answer.includes(key) && !correctChars.includes(key)) {
      setCorrectChars([...correctChars, key]);
      return;
    }

    if (!answer.includes(key) && !wrongChars.includes(key)) {
      setWrongChars([...wrongChars, key]);
      return;
    }
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
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold">Guess the Word</h1>
        <br />
        <Figure wrongChars={wrongChars}/>
        <br />
        <Word data={answer} correctChars={correctChars} />
        <br />
        <WrongWordPool data={wrongChars} />
      </header>
    </div>
  );
}

export default App;
