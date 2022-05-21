import React, { useEffect } from "react";
import { checkWin } from "./Helper";

function Popup(props) {
  const { correctChars, wrongChars, answer, setPlayable, replay } = props; // Deconstructs props

  let popUpMessage = "";
  let playable = true;

  if (checkWin(correctChars, wrongChars, answer) === "win") {
    popUpMessage = "Congratulations!";
    playable = false;
  } else if (checkWin(correctChars, wrongChars, answer) === "lose") {
    popUpMessage = `The word was: ${answer}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="bg-transparent fixed inset-x-0 top-20 bottom-10 hidden content-center justify-center h-max p-5"
      style={popUpMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="bg-zinc-50 rounded-lg text-center p-4">
        <h2>{popUpMessage}</h2>
        <br />
        <button
          onClick={replay}
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Popup;
