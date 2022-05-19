import React from "react";
import { useEffect, useState } from "react";
import Figure from "./Figure";
import Word from "./Word";
import WrongWordPool from "./WrongWordPool";

function BotScreen() {
    const [answer, setAnswer] = useState("TIKTOKBOOTCAMP");
    const [correctChars, setCorrectChars] = useState([]);
    const [wrongChars, setWrongChars] = useState([]);

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

    useEffect(() => {
        const interval = setInterval(GenerateChar, 700);
        // generate a random char every 700ms
        return () => clearInterval(interval);
        // clean up the interval
    }, [answer, correctChars, wrongChars]);
  
    return (
      <div className="App">
        <header className="App-header">
            <h1>bot mode</h1>
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

export default BotScreen;