import React, { useState } from "react";
import "./App.css";
import logo from "./images/ac_logo.png";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Who is the Founder of Asian College",
      options: [
        { id: 0, text: "Dr. V. Locsin", isCorrect: false },
        { id: 1, text: "Mark Macias", isCorrect: false },
        { id: 2, text: "Jose Rizal", isCorrect: false },
        { id: 3, text: "Dr. Constancio A. Sia", isCorrect: true },
      ],
    },
    {
      text: "What year was Asian College founded?",
      options: [
        { id: 0, text: "1972", isCorrect: true },
        { id: 1, text: "1982", isCorrect: false },
        { id: 2, text: "1994", isCorrect: false },
        { id: 3, text: "1996", isCorrect: false },
      ],
    },
    {
      text: "What is the former name of Asian College?",
      options: [
        { id: 0, text: "Asian Institute of Electronics", isCorrect: true },
        { id: 1, text: "Asian College", isCorrect: false },
        { id: 2, text: "Asian College of Science", isCorrect: false },
        { id: 3, text: "Asian College of Technology", isCorrect: false },
      ],
    },
    {
      text: "What is the first core value of Asian College?",
      options: [
        { id: 0, text: "Respect", isCorrect: false },
        { id: 1, text: "Self-Leadership", isCorrect: true },
        { id: 2, text: "Integrity", isCorrect: false },
        { id: 3, text: "Academic Excellence", isCorrect: false },
      ],
    },
    {
      text: "What is the third core value of Asian College?",
      options: [
        { id: 0, text: "Self-Leadership", isCorrect: false },
        { id: 1, text: "Academic Excellence", isCorrect: true },
        { id: 2, text: "Respect", isCorrect: false },
        { id: 3, text: "Integrity", isCorrect: false },
      ],
    },
    {
      text: "What is the second core value of Asian College?",
      options: [
        { id: 0, text: "Integrity", isCorrect: true },
        { id: 1, text: "Academic Excellence", isCorrect: false },
        { id: 2, text: "Respect", isCorrect: false },
        { id: 3, text: "Self-Leadership", isCorrect: false },
      ],
    },
    {
      text: "What is the mission of Asian College?",
      options: [
        { id: 0, text: "Live, Love, Laugh", isCorrect: false },
        { id: 1, text: "Caritas et Scientia", isCorrect: false },
        { id: 2, text: "To educate and develop globally competitive future Leaders", isCorrect: true },
        { id: 3, text: "To educate and develop competitive new future leaders ", isCorrect: false },
      ],
    },
    {
      text: "What is the vision of Asian College?",
      options: [
        { id: 0, text: "To Be The Leading Institution Of Choice For Educational Success To It's Graduates", isCorrect: false },
        { id: 1, text: "To Be The Leading Educational Institution Of Choice Dedicated To The Success Of Its Graduates", isCorrect: true },
        { id: 2, text: "To Educate And Develop Globally Competitive Future Leaders", isCorrect: false },
        { id: 3, text: "To Educate And Develop Competitive New Future Leaders ", isCorrect: false },
      ],
    },
    {
      text: "How Many College Departments are in Asian College Dumaguete?",
      options: [
        { id: 0, text: "5", isCorrect: false },
        { id: 1, text: "3", isCorrect: true },
        { id: 2, text: "2", isCorrect: false },
        { id: 3, text: "7", isCorrect: false },
      ],
    },
    {
      text: "Who is the Campus Administrator?",
      options: [
        { id: 0, text: "Ma'am Isabelita Panday", isCorrect: false },
        { id: 1, text: "Ma'am Lee Vivas", isCorrect: false },
        { id: 2, text: "Ma'am Melody C. Prado", isCorrect: true },
        { id: 3, text: "Ma'am Marte M. Dagpin", isCorrect: false },
      ],
    },
  ];

  {/* A possible answer is clicked */}
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };


  return (
    <div className="App">
      
      <img className="logo" src={logo}></img>

      {/*title*/}
      <h1 className="Text1">The Asian College Trivia Game</h1>

      {/* show question */}
      {showResults ? (

        /* result */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (

        /* Questions  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* options/answers to choose  */}
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
    </div>
  );
}

export default App;