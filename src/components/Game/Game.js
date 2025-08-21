import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });
// console.log( answer );

function Game() {
  const [gameStatus, setGameStatus] = useState("running")
  const [guesses, setGuesses] = useState([
  
  ]);

  function handleSubmitGuess(tentativeGuess) {
    // console.log("guesses", guesses);
    const nextGuess = {
      id: `${tentativeGuess}-${Math.random()}`,
      value: tentativeGuess,
    };

     const nextGuessArray = [...guesses, nextGuess];

     if(answer === tentativeGuess){
      setGameStatus("won")
     } 
     else if(guesses.length >= 5){
      setGameStatus("lost")
     }
    setGuesses(nextGuessArray);
  }

  // console.log(guesses);
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      <GameOverBanner guesses={guesses.length} gameStatus={gameStatus} answer={answer}/>
      
    </>
  );
}

export default Game;
