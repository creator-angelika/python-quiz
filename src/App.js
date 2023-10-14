import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userLevel, setUserLevel] = useState("");

  const questions = [
    {
      text: "What is the result of 5 + 3 * 2 in Python?",
      options: [
        { id: 0, text: "16", isCorrect: false },
        { id: 1, text: "11", isCorrect: true },
        { id: 2, text: "13", isCorrect: false },
        { id: 3, text: "10", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the __init__ method in a Python class?",
      options: [
        { id: 0, text: "To define a class constructor", isCorrect: true },
        { id: 1, text: "To define a class destructor", isCorrect: false },
        { id: 2, text: "To initialize class variables", isCorrect: false },
        { id: 3, text: "To define a static method", isCorrect: false },
      ],
    },
    {
      text: "In Python, what is metaprogramming?",
      options: [
        { id: 0, text: "A programming technique to work with metaclasses.", isCorrect: false },
        { id: 1, text: "Writing code that generates or manipulates other code during runtime.", isCorrect: true },
        { id: 2, text: "A way to define classes that are metahuman and can think for themselves.", isCorrect: false },
        { id: 3, text: "A form of programming that focuses on metaphysical concepts and esoteric ideas.", isCorrect: false },
      ],
    },
    {
      text: "What does the yield keyword do in Python?",
      options: [
        { id: 0, text: "It returns a value from a function and terminates the function's execution.", isCorrect: false },
        { id: 1, text: "It defines a generator function and allows you to pause and resume its execution.", isCorrect: true },
        { id: 2, text: "It raises an exception to handle errors in a function.", isCorrect: false },
        { id: 3, text: "It creates a new thread to run a function concurrently.", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a valid Python variable name?",
      options: [
        { id: 0, text: "1variable", isCorrect: false },
        { id: 1, text: "my-variable", isCorrect: false },
        { id: 2, text: "_my_variable", isCorrect: false },
        { id: 3, text: "break", isCorrect: true },
      ],
    },
    {
      text: "What is the purpose of the yield keyword when used in a Python generator function?",
      options: [
        { id: 0, text: "It terminates the generator function and returns the yielded value.", isCorrect: false },
        { id: 1, text: "It signals the end of a loop in a generator.", isCorrect: false },
        { id: 2, text: "It defines a generator expression.", isCorrect: true },
        { id: 3, text: "It pauses the generator function and yields a value, allowing for resumption of execution.", isCorrect: false },
      ],
    },
    {
      text: "What is the primary difference between a Python list and a Python tuple?",
      options: [
        { id: 0, text: "Lists are immutable, while tuples are mutable.", isCorrect: true }, 
        { id: 1, text: "Lists are ordered and allow duplicate elements, while tuples are unordered and don't allow duplicates.", isCorrect: false },
        { id: 2, text: " Lists use square brackets [ ], and tuples use parentheses ( ).", isCorrect: false },
        { id: 3, text: "Lists are used for mathematical calculations, while tuples are used for iteration. ", isCorrect: false },
      ],
    },
    {
      text: "Which data structure in Python is used to store an unordered collection of unique elements?",
      options: [
        { id: 0, text: "List", isCorrect: false },
        { id: 1, text: "Dictionary", isCorrect: false },
        { id: 2, text: "Set", isCorrect: true },
        { id: 3, text: "Tuple", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the Python zip() function?",
      options: [
        { id: 0, text: "To create a compressed archive of files and directories.", isCorrect: false },
        { id: 1, text: "To combine multiple iterables into an iterator of tuples.", isCorrect: true },
        { id: 2, text: "To sort a list of elements in ascending order.", isCorrect: false },
        { id: 3, text: "To unzip files in a directory.", isCorrect: false },
      ],
    },
    {
      text: "Which of the following statements is true about Python's asyncio library?",
      options: [
        { id: 0, text: "It is used for creating standalone, single-threaded asynchronous applications.", isCorrect: false },
        { id: 1, text: "It allows for true parallel execution of code, bypassing the Global Interpreter Lock (GIL).", isCorrect: false },
        { id: 2, text: "It is primarily used for synchronous I/O operations and doesn't support asynchronous programming.", isCorrect: true },
        { id: 3, text: "It is only compatible with Python 2.", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      determineUserLevel(score);
    }
  };

  const determineUserLevel = (userScore) => {
    if (userScore <= 3) {
      setUserLevel("Beginner");
    } else if (userScore >= 3 && userScore <= 6) {
      setUserLevel("Intermediate");
    } else {
      setUserLevel("Advanced");
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setUserLevel("");
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>PYTHON QUIZ</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
          <t/>
          <button onClick={() => window.location.href = "https://cybrom.com/python/"}>
  Join Our Course
</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {userLevel && <p className="user-level">
      <FontAwesomeIcon icon={faCheck} style={{ marginRight: '12px' }} />
      YOUR LEVEL: {userLevel}</p>}
      
    </div>
  );
}

export default App;
