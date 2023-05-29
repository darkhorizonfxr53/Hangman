import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hangman({ duration = 120000 }) {
  const word = "Hangman".toUpperCase();
  const alphabets = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [timeUp, setTimeUp] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeUp(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  // Function to handle reset
  const handleReset = () => {
    setCorrectGuesses([]);
    setTimeUp(false);
    setReset(!reset);
  };

  const maskedWord = word
    .split('')
    .map(letter => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  const handleGuess = (alphabet) => {
    if (word.includes(alphabet)) {
      setCorrectGuesses([...correctGuesses, alphabet]);
    }
  };

  return (
    <div className="text-center">
      <p>{maskedWord}</p>
      <Button variant="secondary" onClick={handleReset}>
        Reset
      </Button>
      {alphabets.map((alphabet, index) => (
        <Button
          key={index}
          variant="primary"
          onClick={() => handleGuess(alphabet)}
          disabled={correctGuesses.includes(alphabet) || timeUp}
        >
          {alphabet}
        </Button>
      ))}
      {timeUp ? (
        <Alert variant="danger">You lost!</Alert>
      ) : (
        !maskedWord.includes("_") && <Alert variant="success">You won!</Alert>
      )}
      <p>Guess the letters to reveal the hidden word. Click on the letters below to make your guesses.</p>
    </div>
  );
}