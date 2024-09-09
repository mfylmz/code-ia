import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../api";
import { Button, Container, Typography, Box, Paper, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const QuestionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, difficulty } = location.state;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, [language, difficulty]);

  const loadQuestions = async () => {
    try {
      const fetchedQuestions = await fetchQuestions(language, difficulty);
      const filteredQuestions = fetchedQuestions.filter(
        (question) => !displayedQuestions.includes(question.id)
      );

      if (filteredQuestions.length === 0) {
        setDisplayedQuestions([]);
        setQuestions(fetchedQuestions);
        setCurrentQuestionIndex(0);
        setShowExplanation(false);
      } else {
        setQuestions(filteredQuestions);
        setDisplayedQuestions((prev) =>
          prev.concat(filteredQuestions.map((q) => q.id))
        );
        setCurrentQuestionIndex(0);
        setShowExplanation(false);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowExplanation(false);
    } else {
      setShowExplanation(true);
    }
  };

  const handleTryAgain = () => {
    loadQuestions();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion)
    return <Typography variant="h6">No more questions available.</Typography>;

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <IconButton
        onClick={handleGoBack}
        color="primary"
        aria-label="go back"
        sx={{ position: "absolute", top: 16, left: 16 }}
      >
        <ArrowBackIcon sx={{ color: "text.white" }} />
      </IconButton>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper
          elevation={3}
          sx={{ p: 3, backgroundColor: "#161618", color: "white" }}
        >
          <Typography
            sx={{ fontFamily: '"MonaLisa-Bold", sans-serif' }}
            variant="h5"
            gutterBottom
          >
            {currentQuestion.question}
          </Typography>
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2, fontFamily: '"MonaLisa-Thin", sans-serif' }}
              onClick={() => handleAnswer(answer.isCorrect)}
            >
              {answer.text}
            </Button>
          ))}
          {showExplanation && (
            <Box mt={2}>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: '"MonaLisa-Bold", sans-serif' }}
              >
                Correct Answer: {currentQuestion.correctAnswer}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontFamily: '"MonaLisa-Thin", sans-serif' }}
              >
                Explanation: {currentQuestion.explanation}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  fontFamily: '"MonaLisa-Thin", sans-serif',
                  color: "white",
                  backgroundColor: "#212124",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
                onClick={handleTryAgain}
              >
                Try Again
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default QuestionPage;
