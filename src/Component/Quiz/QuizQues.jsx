import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,
  LinearProgress,
} from "@mui/material";
import QuizDashboard from "./QuizDashboard";
import './quizques.css';

const QuizQues = () => {
  const questions = [
    {
      question: "Who was the first Governor-General of independent India?",
      options: [
        "Jawaharlal Nehru",
        "Lord Mountbatten",
        "C. Rajagopalachari",
        "Rajendra Prasad",
      ],
      answer: "Lord Mountbatten",
    },
    {
      question: "Which of the following is the longest river in India?",
      options: ["Ganges", "Brahmaputra", "Yamuna", "Godavari"],
      answer: "Ganges",
    },
    {
      question: "The Indian Parliament consists of how many houses?",
      options: ["One", "Two", "Three", "Four"],
      answer: "Two",
    },
    {
      question:
        "The term ‘Secular’ was added to the Preamble of the Indian Constitution in which year?",
      options: ["1949", "1956", "1976", "1989"],
      answer: "1976",
    },
    {
      question: "Which is the largest state in India by area?",
      options: ["Maharashtra", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
      answer: "Rajasthan",
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      options: [
        "Indira Gandhi",
        "Sarojini Naidu",
        "Rajkumari Amrit Kaur",
        "Sushma Swaraj",
      ],
      answer: "Indira Gandhi",
    },
    {
      question: "Which is the first national park established in India?",
      options: [
        "Sundarbans National Park",
        "Jim Corbett National Park",
        "Kaziranga National Park",
        "Bandipur National Park",
      ],
      answer: "Jim Corbett National Park",
    },
    {
      question: "In which year did India become a Republic?",
      options: ["1947", "1950", "1952", "1956"],
      answer: "1950",
    },
    {
      question: "Who was the first President of India?",
      options: [
        "Dr. Rajendra Prasad",
        "Dr. Sarvepalli Radhakrishnan",
        "Dr. Zakir Husain",
        "Jawaharlal Nehru",
      ],
      answer: "Dr. Rajendra Prasad",
    },
    {
      question:
        "The Indian Constitution was adopted by the Constituent Assembly on which date?",
      options: [
        "15th August 1947",
        "26th January 1950",
        "26th November 1949",
        "15th August 1949",
      ],
      answer: "26th November 1949",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  const [quizFinished, setQuizFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false); // State to show correct answer
  const [answered, setAnswered] = useState(false); // Flag to check if the question has been answered

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      handleNextQuestion(); // Auto move to next question when time is up
    }
  }, [timeLeft]);

  const handleNextQuestion = () => {
    // If the selected answer is correct, increase the score
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    // Set answered flag to true
    setAnswered(true);

    // Show the correct answer and disable further selection
    setShowAnswer(true);

    // Move to the next question or finish quiz
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
        setShowAnswer(false);
        setAnswered(false);
        setTimeLeft(30); // Reset timer for the next question
      } else {
        setQuizFinished(true);
      }
    }, 1500); // Delay the move to next question
  };

  const handleOptionClick = (option) => {
    if (!answered) {
      setSelectedOption(option);
    }
  };

  const getOptionStyle = (option) => {
    if (answered) {
      if (option === questions[currentQuestion].answer) {
        return {
          backgroundColor: "#c8e6c9", // Green background for correct option
          color: "#388e3c", // Green text color for correct option
        };
      }
      if (option === selectedOption && option !== questions[currentQuestion].answer) {
        return {
          backgroundColor: "#ffcdd2", // Red background for incorrect option
          color: "#f44336", // Red text color for incorrect option
        };
      }
    }
    return {}; // Default style for unselected options
  };

  if (quizFinished) {
    return <QuizDashboard score={score} totalQuestions={questions.length} />;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex">
          <Paper
            className="my-0"
            elevation={3}
            sx={{
              maxWidth: 600,
              margin: "auto",
              padding: 3,
              mt: 5,
            }}
          >
            <AppBar
              position="static"
              sx={{ mb: 2, backgroundColor: "#ffd6d6", color: "#000" }}
            >
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Awesome Quiz Application
                </Typography>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Time Left: {timeLeft}s</Typography>
                </Box>
              </Toolbar>
            </AppBar>
            <Typography variant="h6">
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </Typography>

            <Box sx={{ mt: 2 }}>
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  fullWidth
                  onClick={() => handleOptionClick(option)}
                  sx={{
                    justifyContent: 'flex-start',
                    marginBottom: "8px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor:
                      selectedOption === option ? "#f61a25" : "#ccc", // Highlight the selected option
                    backgroundColor: selectedOption === option ? "#ffe6e6" : "transparent", // Light background for selected option
                    color: selectedOption === option ? "#f61a25" : "initial", // Change text color when selected
                    ...getOptionStyle(option), // Apply dynamic styles based on correctness
                  }}
                >
                  {option}
                </Button>
              ))}
            </Box>

            {showAnswer && (
              <Typography variant="body1" sx={{ color: "green", mt: 2 }}>
                Correct Answer: {questions[currentQuestion].answer}
              </Typography>
            )}

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f61a25",
                  "&:hover": {
                    backgroundColor: "#ff704d",
                  },
                  width: "100%", // Make the button take up full width of the card
                  borderRadius: "5px", // Match the card's border radius
                }}
                onClick={handleNextQuestion}
                disabled={!selectedOption && timeLeft > 0}
              >
                {currentQuestion < questions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </Button>
            </Box>

            <Box
              sx={{
                mt: 3,
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <LinearProgress
                className="shadow"
                variant="determinate"
                value={((currentQuestion + 1) / questions.length) * 100}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "lightgrey",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#ffd6d6",
                  },
                }}
              />
              <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                {currentQuestion + 1} of {questions.length} Questions
              </Typography>
            </Box>
          </Paper>

          <div className="quizz-media-img" style={{ width: '600px', margin: '0px auto' }}>
            <img style={{ width: '92%', height: '100%' }} src="https://i.ibb.co/5595Wp3/DALL-E-2025-01-13-20-58-17-A-visually-engaging-split-screen-illustration-on-the-left-a-blackboard-wi.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizQues;
