import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DifficultySelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = location.state;

  const handleDifficultySelect = (difficulty) => {
    navigate("/questions", { state: { language, difficulty } });
  };

  const handleGoBack = () => {
    navigate(-1);
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

      <Typography
        variant="h5" 
        gutterBottom
        sx={{ color: "text.white", fontSize: "1.5rem", padding: "3rem" ,fontFamily: '"MonaLisa-Bold", sans-serif' }}
      >
        Select Difficulty Level
      </Typography>

      {["Is This Easy Mode?", "Hold My Beer", "I don't have self respect"].map(
        (label, index) => {
          const difficulty = ["Easy", "Medium", "Hard"][index];
          return (
            <Button
              key={difficulty}
              variant="contained"
              onClick={() => handleDifficultySelect(difficulty)}
              sx={{
                fontFamily: '"MonaLisa-Thin", sans-serif',
                backgroundColor: "secondary.light",
                color: "text.white",
                fontSize: { xs: "0.9rem", sm: "0.9rem" },
                maxWidth: "300px",
                width: "80%",
                height: "auto",
                padding: { xs: "10px 20px", sm: "10px 40px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginBottom: 2,
                "&:hover": {
                  backgroundColor: {
                    Easy: "green",
                    Medium: "yellow",
                    Hard: "red",
                  }[difficulty],
                },
              }}
            >
              {label}
            </Button>
          );
        }
      )}
    </Box>
  );
};

export default DifficultySelectionPage;
