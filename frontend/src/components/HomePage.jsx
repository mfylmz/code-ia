import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  Avatar,
  Card,
} from "@mui/material";
import logo from "../styles/assets/images/logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/select-language");
  };

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
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 3,
        }}
      >
        <Avatar
          alt="Logo"
          src={logo}
          sx={{ width: 300, height: 80, marginBottom: 0 }}
        />
        <Typography
          variant="p"
          gutterBottom
          sx={{ color: "text.white", fontSize: "1rem" }}
        >
          Your Ultimate Ai Coding Trivia Site
        </Typography>
        <Container sx={{ margin: "2rem" }}>
          <Typography
            variant="p"
            gutterBottom
            sx={{
              color: "text.white",
              fontSize: "0.8rem",
              fontFamily: '"MonaLisa-Thin", sans-serif',
            }}
          >
            Welcome to Code-IA, where every tap takes you deeper into the world
            of code! Challenge yourself with fun, interactive real time Ai made
            trivia questions about programming languages, algorithms, and
            software development practices. Learn, play, and level up your
            coding skills!
          </Typography>
        </Container>

        {[
          "👨‍💻 Can you guess the output of this Python code?",
          "💡 What does this JavaScript function return?",
          "🔍 Which SQL command will retrieve all records from a table?",
          "🎮 Match the code snippet to the correct programming language.",
        ].map((text, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              fontFamily: '"MonaLisa-Thin", sans-serif',
              backgroundColor: "secondary.light",
              color: "text.white",
              fontSize: { xs: "0.9rem", sm: "0.8rem" },
              width: { xs: "90%", sm: "500px" },
              height: "auto",
              padding: { xs: "10px 20px", sm: "8px 40px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginBottom: 2,
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            {text}
          </Card>
        ))}

        <Button
          onClick={handleStart}
          variant="contained"
          sx={{
            fontFamily: '"MonaLisa-Thin", sans-serif',
            backgroundColor: "green",
            color: "white",
            fontSize: { xs: "0.9rem", sm: "0.9rem" },
            width: { xs: "100%", sm: "auto" },
            padding: { xs: "10px 20px", sm: "10px 40px" },
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Let's Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
