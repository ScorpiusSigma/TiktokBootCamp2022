import React from "react";
import { useEffect, useState } from "react";
import Figure from "./Figure";
import Popup from "./Popup";
import Word from "./Word";
import WrongWordPool from "./WrongWordPool";
import Navigation from "./Navigation";

function BotScreen() {
    const [answer, setAnswer] = useState("TIKTOKBOOTCAMP");
    const [correctChars, setCorrectChars] = useState([]);
    const [wrongChars, setWrongChars] = useState([]);
    const [playable, setPlayable] = useState(true);

    // generate random character
    function GenerateChar() {
        var key = '';
        const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        key = charList.charAt(Math.floor(Math.random() * charList.length));
        
        if (answer.includes(key) && !correctChars.includes(key)) {
            setCorrectChars([...correctChars, key]);
            return;
        }
        
        if (!answer.includes(key) && !wrongChars.includes(key)) {
            setWrongChars([...wrongChars, key]);
            return;
        }
    }

    const replay = () => {
        setCorrectChars([]);
        setWrongChars([]);
        
        const newWord = "SHREK";
        setAnswer(newWord);
      }

    useEffect(() => {
        if (wrongChars.length < 6) {
            const interval = setInterval(GenerateChar, 700);
            // generate a random char every 700ms
            return () => clearInterval(interval);
        }

        // clean up the interval
    }, [answer, correctChars, wrongChars]);
  
    return (
        <>
        <Navigation />
        <div className="App App-header">
            <h1 className="text-4xl font-bold">Bot</h1>
            <br />
            <h1 className="text-6xl font-bold">Guess the Word</h1>
        </div> 
        <div className="Game">
            <Figure wrongChars={wrongChars}/>
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
      </>
    );
}

export default BotScreen;