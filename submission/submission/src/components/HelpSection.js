import React, { useState } from 'react';

const HelpSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHelp = () => {
    setIsOpen(!isOpen);
  };
// Here is a basic help Section. More information is given in the Help.md file
  return (
    <div>
      <button onClick={toggleHelp}>Help</button>
      {isOpen && (
        <div className="help-section">
          <h2>Hangman Help</h2>
          <p>Welcome to the Hangman game! The goal is to guess the hidden word by guessing one letter at a time. You have a limited number of incorrect guesses before the hangman is completed.</p>
          <p>To make a guess, simply click or type a letter. If the letter is part of the word, it will be revealed. Otherwise, it will count as an incorrect guess.</p>
          <p>There are eleven (11) guess for you to try until our picture is drawn.</p>
          <p>All the words are names to programming languages, such as css, html, etc.</p>
          <p>If you need more information, please head on over to the file called Help.md</p>
          <p>Good luck and have fun!</p>
        </div>
      )}
    </div>
  );
};

export default HelpSection;